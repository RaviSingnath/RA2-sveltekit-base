import { describe, it, expect } from "vitest";
import qoutasData from "../data/quotas.json"

import { quotasRunes } from "$lib/runes/quotasRunes.svelte";

describe("Quota selection tests", () => {
  const quota = quotasRunes()

  it("Selected quota items should be 0", () => {
    expect(quota.selectedQuotaItems.length).toBe(0);
  });

  it("On selecting single quota, selected quota should be 1", () => {
    quota.toggleSingleQuota(qoutasData[0])

    expect(quota.selectedQuotaItems.length).toBe(1);
  });

  it("On selecting all quota, selected quotas should be all quotas items", () => {
    quota.toggleAllQuota(true)
    
    const qd = quota.quotas.length
    expect(quota.selectedQuotaItems.length).toBe(qd)
  });

  it("On deselecting all quota, selected quotas should be 0", () => {
    quota.deselectQuotas()
    expect(quota.selectedQuotaItems.length).toBe(0);
  });
}) 

