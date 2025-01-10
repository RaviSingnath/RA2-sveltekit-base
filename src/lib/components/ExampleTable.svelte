<script lang="ts">
  import { quotasRunes } from "$lib/runes/quotasRunes.svelte";
  import SelectedRowBar from "$lib/components/SelectedRowBar.svelte";
  import QuotaTable from "$lib/components/table/quota/QuotaTable.svelte";
  import TableOptions from "$lib/components/table/quota/TableOptions.svelte";
  import AnimateTable from "$lib/components/animate-pulse/AnimateTable.svelte";

  let { tableData }: { tableData: Quota[] } = $props();

  const qr = quotasRunes();

  let data: Quota[] = $derived.by(() => {
    if (qr.searchTerm) {
      return qr.filteredQuotas;
    } else {
      return qr.quotas;
    }
  });

  $effect(() => {
    setTimeout(() => {
      if (tableData) qr.quotas = tableData;
    }, 2000);
  });
</script>

<div class="overflow-hidden rounded-lg bg-white shadow">
  <div>
    <TableOptions />
    <div class="overflow-y-auto">
      <div class="flow-root px-4 sm:px-6 lg:px-8">
        <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div class="relative inline-block min-w-full py-2 align-middle">
            {#if data.length > 0}
              <QuotaTable items={data} />
            {:else}
              <AnimateTable />
            {/if}
            <SelectedRowBar />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
