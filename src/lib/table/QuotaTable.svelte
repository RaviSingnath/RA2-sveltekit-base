<script lang="ts">
  import Header from "./Header.svelte";
  import Row from "./Row.svelte";

  const { items }: { items: Quota[] } = $props();
</script>

<div class="max-h-[600px] min-w-full overflow-y-auto">
  <Header />
  {#each items as item (item.id)}
    <Row quota={item} />
  {/each}
</div>
