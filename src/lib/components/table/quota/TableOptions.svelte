<script lang="ts">
  import { Input } from "$lib/components/input";
  import { quotasRunes } from "$lib/runes/quotasRunes.svelte";

  const qr = quotasRunes();

  const setSearchText = (e: Event) =>
    (qr.searchTerm = (e.target as HTMLInputElement).value);
</script>

<div class="px-4 pb-0 pt-5 sm:flex sm:items-center sm:p-6">
  <div class="sm:flex-auto">
    <Input onQuotaSearch={(e) => setSearchText(e)} />
  </div>
</div>
