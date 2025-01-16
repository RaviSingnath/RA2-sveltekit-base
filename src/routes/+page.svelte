<script lang="ts">
  import ExampleTable from "$lib/components/ExampleTable.svelte";
  import { Toaster } from "svelte-5-french-toast";

  const { data }: { data: { [key: string]: [] } } = $props();
</script>

<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
      SvelteKit Base
    </h2>
    <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
      cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
    </p>
  </div>
  <div class="mx-auto mt-10 max-w-screen-2xl text-center">
    <ExampleTable tableData={data.dummyData} />
  </div>
</div>

<Toaster />
