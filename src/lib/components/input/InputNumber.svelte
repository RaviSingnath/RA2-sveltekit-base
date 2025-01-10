<script lang="ts">
  let {
    error,
    value = $bindable(),
    name,
  }: { error: string; value: number; name: string } = $props();

  let errorClass =
    "pr-10 sm:pr-9 text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600";

  let normalClass =
    "text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600";
</script>

<div class="w-full py-2">
  <div class="relative flex">
    <input
      type="number"
      class="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-3 text-base outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 {error
        ? errorClass
        : normalClass}"
      placeholder="Limit"
      bind:value
      {name}
    />

    {#if error}
      <svg
        class="pointer-events-none absolute right-0 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          clip-rule="evenodd"
        />
      </svg>
    {/if}
  </div>

  {#if error}
    <p class="mt-2 text-sm text-red-600" id="email-error">
      {error}
    </p>
  {/if}
</div>
