<script lang="ts">
  import CheckBox from "$lib/form-input/CheckBox.svelte";
  import { quotasRunes } from "../../data/runes/quotasRunes.svelte";
  import { ArrowsUpDown } from "svelte-heros-v2";

  const quotas = quotasRunes();

  const sortColumn = (field: string) => {
    if (quotas.sortDirection === "asce") quotas.sortDirection = "desc";
    else quotas.sortDirection = "asce";

    quotas.sortQuotas(field);
  };
</script>

<header
  class="sticky left-0 top-0 grid w-full grid-cols-6 gap-4 border-b border-gray-300"
>
  <div
    class="col-span-3 flex items-center gap-3 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
  >
    <CheckBox
      label="Name"
      id="all-quotas"
      checked={quotas.quotas.length === quotas.selectedQuotaItems.length}
      toggleAllQuota={(e) => quotas.toggleAllQuota(e)}
    />
    <ArrowsUpDown
      size="20"
      class="cursor-pointer"
      onclick={() => sortColumn("name")}
    />
  </div>
  <div
    class="col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
  >
    <div class="col-span-2 flex items-center gap-3">
      Status <ArrowsUpDown
        size="20"
        class="cursor-pointer"
        onclick={() => sortColumn("status")}
      />
    </div>
  </div>
  <div
    class="col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
  >
    <div class="col-span-2 flex items-center gap-3">
      Limit<ArrowsUpDown
        size="20"
        class="cursor-pointer"
        onclick={() => sortColumn("limit")}
      />
    </div>
  </div>
  <div
    class="col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
  >
    <div class="col-span-2 self-center"></div>
  </div>
</header>
