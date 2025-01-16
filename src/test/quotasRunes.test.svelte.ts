import { flushSync } from 'svelte';
import { expect, test } from 'vitest';
import { quotasRunes } from "$lib/runes/quotasRunes.svelte";

test("Search quota with string 'ravi' tests", () => {
  const cleanup = $effect.root(() => {

    const quota = quotasRunes()
    
    quota.searchTerm = 'ravi';

    expect(quota.filteredQuotas.length).toBeGreaterThan(0);

    flushSync();
  });
   
  cleanup();
  
});

test("Search quota with string 'rrrr' tests", () => {
  const cleanup = $effect.root(() => {

    const quota = quotasRunes()
    
    quota.searchTerm = 'rrrr';

    expect(quota.filteredQuotas.length).toEqual(0);

    flushSync();
  });
   
  cleanup();
  
});