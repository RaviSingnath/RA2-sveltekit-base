<script lang="ts">
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let {
    error,
    selected = $bindable(),
    openUpside = false,
  }: { error: string; selected: boolean; openUpside?: boolean } = $props();

  let errorClass =
    "text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600";

  let normalClass =
    "text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600";

  let open = $state(false);

  let options = [
    { label: "Enabled", enabled: true },
    { label: "Disabled", enabled: false },
  ];

  const onSelectToggle = () => (open = !open);
  const onSelectChange = (enabled: boolean) => (selected = enabled);
</script>

<div class="w-full">
  <!-- <label id="listbox-label" class="block text-sm/6 font-medium text-gray-900"
    >Assigned to</label
  > -->
  <div
    tabindex="0"
    role="button"
    onclick={onSelectToggle}
    onkeydown={onSelectToggle}
  >
    <button
      type="button"
      class="grid w-full cursor-pointer grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 {error
        ? errorClass
        : normalClass}"
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="listbox-label"
    >
      <span class="col-start-1 row-start-1 truncate pr-6"
        >{selected ? "Enabled" : "Disabled"}</span
      >
      <svg
        class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
    {#if open}
      <ul
        class="{openUpside
          ? 'fixed bottom-[88px] w-fit'
          : 'absolute w-full'}  mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
        in:fly={{ y: -50, duration: 300, delay: 50, easing: cubicOut }}
        out:fly={{ y: 50, duration: 300, delay: 50, easing: cubicOut }}
      >
        <!--
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "bg-indigo-600 text-white outline-none", Not Highlighted: "text-gray-900"
      -->

        {#each options as { label, enabled } (label)}
          <li
            class="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white hover:outline-none"
            id="listbox-option-0"
            role="option"
            aria-selected={selected == enabled}
            onclick={() => onSelectChange(enabled)}
            onkeydown={() => onSelectChange(enabled)}
          >
            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span
              class="block truncate {selected == enabled
                ? 'font-semibold'
                : 'font-normal'}">{label}</span
            >

            <!--
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        -->
            {#if selected == enabled}
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-hover:text-white"
              >
                <svg
                  class="size-5 {selected == enabled
                    ? 'font-semibold'
                    : 'font-normal'}"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            {/if}
          </li>
        {/each}

        <!-- More items... -->
      </ul>
    {/if}
    {#if error}
      <p class="mt-2 text-sm text-red-600" id="email-error">
        {error}
      </p>
    {/if}
  </div>
</div>
