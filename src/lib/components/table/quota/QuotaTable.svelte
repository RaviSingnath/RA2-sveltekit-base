<script lang="ts">
  import Header from "./Header.svelte";
  import Row from "./Row.svelte";

  const { items }: { items: Quota[] } = $props();
</script>

<div class="w-full">
  <Header />
  <div
    class="max-h-[600px] divide-y divide-blue-200 overflow-auto whitespace-nowrap max-md:space-y-2"
  >
    {#each items as item (item.id)}
      <Row quota={item} />
    {/each}
  </div>
</div>
