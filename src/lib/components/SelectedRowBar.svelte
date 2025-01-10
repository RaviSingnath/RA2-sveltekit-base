<script lang="ts">
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import toast from "svelte-5-french-toast";
  import { invalidateAll } from "$app/navigation";
  import { enhance, applyAction } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import {
    XMark,
    XCircle,
    PencilSquare,
    ArrowPath,
    CheckCircle,
  } from "svelte-heros-v2";
  import validate from "$lib/utils/validate";
  import { quotasRunes } from "$lib/runes/quotasRunes.svelte";
  import { Select, InputNumber } from "$lib/components/input";
  import { bulkQuotaSchema } from "$lib/validate-schema/quotaSchema";

  const quotassRunes = quotasRunes();

  let editLimit = $state(false);
  let quotaEnabled: boolean = $state(true);
  let quotaLimit: number = $state(1);
  let error: { [key: string]: string } = $state({});
  let loading = $state(false);
  let actionSuccess = $state(false);

  const showBar = $derived.by(() =>
    quotassRunes.selectedQuotaItems.length > 0 ? true : false,
  );

  $effect(() => {
    if (actionSuccess) {
      setTimeout(() => {
        quotassRunes.deselectQuotas();
        actionSuccess = false;
        loading = false;
      }, 5000);
    }
  });

  const updateItem: SubmitFunction = async ({ formData, cancel }) => {
    const ff = Object.fromEntries(formData);
    const d = {
      is_enabled: ff.is_enabled === "true",
      limit: Number(ff.limit),
    };
    console.log(ff, d);

    // JUST FOR TESTING

    loading = true;
    setTimeout(() => {
      actionSuccess = true;
      loading = false;
    }, 3000);

    // JUST FOR TESTING

    let { data, errors } = await validate(d, bulkQuotaSchema);
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
          actionSuccess = true;
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

{#if showBar}
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-x-0 bottom-4 flex items-start px-2 py-6 sm:items-start sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4">
      <!--
      Notification panel, dynamically insert this into the live region when it needs to be displayed

      Entering: "transform ease-out duration-300 transition"
        From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        To: "translate-y-0 opacity-100 sm:translate-x-0"
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="pointer-events-auto w-full max-w-screen-md overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-black/5"
        in:fly={{ y: -50, duration: 300, delay: 50, easing: cubicOut }}
        out:fly={{ y: 50, duration: 300, delay: 50, easing: cubicOut }}
      >
        <div class="">
          {#if actionSuccess}
            <div class="flex items-center justify-between px-4 py-2">
              <div class="flex items-center gap-4">
                <CheckCircle variation="outline" size="20" />
                <span
                  >{quotassRunes.selectedQuotaItems.length} quottas successfully
                  updated</span
                >
              </div>
              <XMark
                size="20"
                variation="solid"
                class="cursor-pointer"
                onclick={() => quotassRunes.deselectQuotas()}
              />
            </div>
          {:else}
            <form method="POST" action="?/updateQuota" use:enhance={updateItem}>
              <div class="flex items-center px-4 py-2">
                <div class="flex w-full items-center justify-between gap-4">
                  <p
                    class="flex w-full flex-1 items-center gap-1 text-sm font-medium text-gray-900"
                  >
                    {quotassRunes.selectedQuotaItems.length} selected
                    <XCircle
                      variation="solid"
                      size="16"
                      class="cursor-pointer text-red-600 hover:text-red-500"
                      onclick={() => {
                        quotassRunes.deselectQuotas();
                        actionSuccess = false;
                      }}
                    />
                  </p>
                  <p
                    class="flex w-full flex-1 items-center gap-1 text-sm font-medium text-gray-900"
                  >
                    Status
                    <Select
                      selected={true}
                      openUpside
                      error={error?.is_enabled}
                    />
                    <input
                      type="hidden"
                      name="is_enabled"
                      value={quotaEnabled}
                    />
                  </p>
                  <p
                    class="flex w-full flex-1 items-center gap-1 text-sm font-medium text-gray-900"
                  >
                    {#if editLimit}
                      <InputNumber
                        error={error?.limit}
                        bind:value={quotaLimit}
                        name="limit"
                      />
                      <XCircle
                        variation="solid"
                        size="16"
                        class="cursor-pointer text-red-600 hover:text-red-500"
                        onclick={() => (editLimit = false)}
                      />
                    {:else}
                      Edit limit
                      <PencilSquare
                        variation="solid"
                        class="cursor-pointer"
                        size="16"
                        onclick={() => (editLimit = true)}
                      />
                    {/if}
                  </p>
                </div>
                <div class="flex shrink-0 border-s-2 border-black/5">
                  {#if loading}
                    <ArrowPath class="animate-spin" size="20" />
                  {:else}
                    <button
                      type="submit"
                      class="ml-3 shrink-0 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >Save</button
                    >
                  {/if}
                </div>
              </div>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
