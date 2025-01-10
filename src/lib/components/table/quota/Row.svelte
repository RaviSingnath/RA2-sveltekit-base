<script lang="ts">
  import toast from "svelte-5-french-toast";
  import { invalidateAll } from "$app/navigation";
  import { enhance, applyAction } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { XCircle, ArrowPath } from "svelte-heros-v2";
  import validate from "$lib/utils/validate";
  import { quotasRunes } from "$lib/runes/quotasRunes.svelte";
  import { quotaSchema } from "$lib/validate-schema/quotaSchema";
  import { Select, RowCheckbox, InputNumber } from "$lib/components/input";

  let { quota }: { quota: Quota } = $props();

  let editRow: boolean = $state(false);
  let quotaEnabled: boolean = $state(quota.is_enabled);
  let quotaLimit: number = $state(quota.limit);
  let error: { [key: string]: string } = $state({});
  let loading = $state(false);

  const quotas = quotasRunes();

  const onToggleSingleQuota = (quota: Quota) => quotas.toggleSingleQuota(quota);

  let itemSelected = $derived.by(() => {
    let obj = quotas.selectedQuotaItems.find((q) => q.id === quota.id);
    if (obj) return true;
    return false;
  });

  const updateItem: SubmitFunction = async ({ formData, cancel }) => {
    const ff = Object.fromEntries(formData);
    const d = {
      is_enabled: ff.is_enabled === "true",
      limit: Number(ff.limit),
      name: ff.name,
      quota_id: ff.quota_id,
    };
    console.log(ff, d);

    let { data, errors } = await validate(d, quotaSchema);
    // console.log(data, errors);

    if (!data.success) {
      cancel();
      error = errors;
    } else {
      loading = true;
      error = {};
    }

    return async ({ result, update }) => {
      console.log(result);
      switch (result.type) {
        case "success":
          error = {};
          toast.success("Updated successfully", { position: "top-right" });
          invalidateAll();
          break;

        case "failure":
          if (result.status === 400) {
            error = result?.data?.error;
          } else {
            toast.error(result?.data?.error, { position: "top-right" });
          }
          break;

        default:
          break;
      }

      loading = false;

      await update();

      await applyAction(result);
    };
  };
</script>

<form method="POST" action="?/updateQuota" use:enhance={updateItem}>
  <input type="hidden" name="quota_id" value={quota.id} />
  <input type="hidden" name="name" value={quota.name} />
  <div
    class="grid grid-cols-6 gap-4 {quota.id} {itemSelected
      ? 'bg-gray-100'
      : 'bg-white'}"
  >
    <div
      class="col-span-3 flex items-center gap-3 whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
    >
      <RowCheckbox
        {quota}
        id={quota.id}
        label={quota.name}
        checked={itemSelected}
        disabled={editRow}
        onCheckboxToggle={onToggleSingleQuota}
      />
    </div>
    <div
      class="col-span-1 flex items-center whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-500"
    >
      {#if editRow}
        <Select bind:selected={quotaEnabled} error={error?.is_enabled} />
        <input type="hidden" name="is_enabled" value={quotaEnabled} />
      {:else}
        <span
          class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium {quota.is_enabled
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'} "
        >
          {#if quota.is_enabled}
            Enabled
          {:else}
            Disabled
          {/if}
        </span>
      {/if}
    </div>
    <div
      class="col-span-1 flex items-center whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
    >
      {#if editRow}
        <InputNumber
          error={error?.limit}
          bind:value={quotaLimit}
          name="limit"
        />
      {:else}
        {quota.limit}
      {/if}
    </div>
    <div
      class="col-span-1 flex items-center whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
    >
      <div class="col-span-1 self-center">
        {#if !itemSelected}
          <div class="flex cursor-pointer items-center justify-start gap-2">
            {#if editRow}
              <button
                type="submit"
                onclick={(e) => e.stopPropagation()}
                class="inline-flex items-center gap-x-1.5 rounded-md bg-eaGrey-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-eaGrey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eaGrey-600"
              >
                {#if loading}
                  <ArrowPath class="animate-spin" size="20" />
                {:else}
                  Save
                {/if}
              </button>
              <XCircle
                variation="solid"
                size="16"
                class="text-red-600 hover:text-red-500"
                onclick={() => (editRow = !editRow)}
              />
            {:else}
              <button class="p-2" onclick={() => (editRow = !editRow)}
                >Edit</button
              >
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
</form>
