<script lang="ts">
  import { MagnifyingGlass } from "svelte-heros-v2";

  const { onQuotaSearch }: { onQuotaSearch: (e: Event) => void } = $props();
</script>

<div class="max-w-60">
  <div class="mt-2 grid grid-cols-1">
    <input
      type="text"
      class="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
      placeholder="Search quota"
      oninput={(e) => onQuotaSearch(e)}
    />
    <MagnifyingGlass
      class="pointer-events-none col-start-1 row-start-1 ml-2 self-center text-black"
    />
  </div>
</div>
