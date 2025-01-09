<div class="min-w-full animate-pulse overflow-y-auto">
  <header class="sticky grid w-full grid-cols-6 gap-4 border-b border-gray-300">
    <div
      class="top-0 z-10 col-span-3 flex items-center bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
    >
      <div class="grid grid-cols-5 gap-4">
        <input
          type="checkbox"
          class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        />
        <div class="col-span-4 h-2 self-center rounded bg-slate-200"></div>
      </div>
    </div>
    <div
      class="top-0 z-10 col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
    >
      <div class="col-span-2 h-2 self-center rounded bg-slate-200"></div>
    </div>
    <div
      class="top-0 z-10 col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
    >
      <div class="col-span-2 h-2 self-center rounded bg-slate-200"></div>
    </div>
    <div
      class="top-0 z-10 col-span-1 grid grid-cols-4 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
    >
      <div class="col-span-2 h-2 self-center rounded bg-slate-200"></div>
    </div>
  </header>

  {#each { length: 8 }, item}
    <div class="grid grid-cols-6 gap-4 bg-white">
      <div
        class="col-span-3 flex items-center gap-2 whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
      >
        <div class="grid grid-cols-8 gap-4">
          <input
            type="checkbox"
            class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
          />
          <div class="col-span-7 h-2 self-center rounded bg-slate-200"></div>
        </div>
      </div>
      <div
        class="col-span-1 grid grid-cols-4 whitespace-nowrap pl-4 pr-3 text-sm font-medium text-gray-500"
      >
        <span
          class="col-span-2 h-4 self-center rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-green-800"
        >
        </span>
      </div>
      <div
        class="grid-cols-4grid col-span-1 grid grid-cols-4 whitespace-nowrap pl-4 pr-3 text-sm text-gray-500"
      >
        <div class="col-span-1 h-2 self-center rounded bg-slate-200"></div>
      </div>
      <div
        class="grid-cols-4grid col-span-1 grid grid-cols-4 whitespace-nowrap pl-4 pr-3 text-sm text-gray-500"
      >
        <div class="col-span-1 h-2 self-center rounded bg-slate-200"></div>
      </div>
    </div>
  {/each}
</div>
