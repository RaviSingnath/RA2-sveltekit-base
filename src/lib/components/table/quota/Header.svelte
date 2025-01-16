<script lang="ts">
  import { ArrowsUpDown } from "svelte-heros-v2";
  import { Checkbox } from "$lib/components/input";
  import { quotasRunes } from "$lib/runes/quotasRunes.svelte";

  const quotas = quotasRunes();

  const sortColumn = (field: string) => {
    quotas.sortQuotas(field);
  };
</script>

<header
  class="sticky left-0 top-0 grid w-full grid-cols-[1fr_1fr_1fr] gap-4 overflow-auto border-b border-gray-300 bg-white md:grid-cols-[40%_1fr_1fr_1fr]"
>
  <div
    class="flex items-center gap-3 px-3 py-5 text-left text-sm font-semibold text-gray-900"
  >
    <Checkbox
      label="Name"
      id="all-quotas"
      checked={quotas.quotas.length === quotas.selectedQuotaItems.length}
      toggleAllQuota={(checked) => quotas.toggleAllQuota(checked)}
    />
    <ArrowsUpDown
      size="20"
      class="cursor-pointer"
      onclick={() => sortColumn("name")}
    />
  </div>
  <div class="px-3 py-5 text-left text-sm font-semibold text-gray-900">
    <div class="flex items-center gap-3">
      Status <ArrowsUpDown
        size="20"
        class="cursor-pointer"
        onclick={() => sortColumn("status")}
      />
    </div>
  </div>
  <div class="px-3 py-5 text-left text-sm font-semibold text-gray-900">
    <div class="flex items-center gap-3">
      Limit<ArrowsUpDown
        size="20"
        class="cursor-pointer"
        onclick={() => sortColumn("limit")}
      />
    </div>
  </div>
  <div
    class="px-3 py-5 text-left text-sm font-semibold text-gray-900 max-sm:hidden"
  >
    <div class="self-center"></div>
  </div>
</header>
