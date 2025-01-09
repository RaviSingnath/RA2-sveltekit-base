<script lang="ts">
  import Input from "./form-input/Input.svelte";
  import { quotasRunes } from "../data/runes/quotasRunes.svelte";

  const qr = quotasRunes();

  const setSearchText = (e: Event) =>
    (qr.searchTerm = (e.target as HTMLInputElement).value);
</script>

<div class="px-4 pb-0 pt-5 sm:flex sm:items-center sm:p-6">
  <div class="sm:flex-auto">
    <Input onQuotaSearch={(e) => setSearchText(e)} />
  </div>
  <div>
    <button
      type="button"
      class="inline-flex items-center gap-x-1.5 rounded-md bg-eaGrey-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-eaGrey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eaGrey-600"
    >
      Create
    </button>
    <button
      type="button"
      class="inline-flex items-center gap-x-1.5 rounded-md bg-eaGrey-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-eaGrey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eaGrey-600"
    >
      Export
    </button>
    <button
      type="button"
      class="inline-flex items-center gap-x-1.5 rounded-md bg-eaGrey-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-eaGrey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eaGrey-600"
    >
      Import
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="-mr-0.5 size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
        />
      </svg>
    </button>
  </div>
</div>
