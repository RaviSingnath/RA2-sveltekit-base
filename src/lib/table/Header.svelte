<script lang="ts">
  import CheckBox from "$lib/form-input/CheckBox.svelte";
  import { quotasRunes } from "../../data/runes/quotasRunes.svelte";

  const quotas = quotasRunes();
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
  </div>
  <div
    class="col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
  >
    <div class="col-span-2 self-center">Status</div>
  </div>
  <div
    class="col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
  >
    <div class="col-span-2 self-center">Limit</div>
  </div>
  <div
    class="col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
  >
    <div class="col-span-2 self-center"></div>
  </div>
</header>
