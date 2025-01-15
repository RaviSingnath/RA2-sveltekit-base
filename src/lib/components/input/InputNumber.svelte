<script lang="ts">
  let {
    error,
    value = $bindable(),
    name,
  }: { error: string; value: number; name: string } = $props();

  let errorClass =
    "text-red-900 border-red-300 placeholder:text-red-300 focus:border-red-600";

  let normalClass =
    "text-gray-900 border-gray-300 placeholder:text-gray-400 focus:border-indigo-600";
</script>

<div class="w-full">
  <!-- <div class="flex"> -->
  <input
    type="number"
    class="border-1 -border-offset-1 focus:-border-offset-2 col-start-1 row-start-1 block w-full rounded-md border bg-white px-3 py-1.5 text-base focus:border sm:text-sm/6 {error
      ? errorClass
      : normalClass}"
    placeholder="Limit"
    bind:value
    {name}
  />
  <!-- </div> -->

  {#if error}
    <p class="mt-2 text-sm text-red-600" id="email-error">
      {error}
    </p>
  {/if}
</div>
