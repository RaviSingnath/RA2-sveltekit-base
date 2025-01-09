let quotas: Quota[] = $state([]);

let searchTerm: string = $state('');

let selectedQuotaItems: Quota[] = $state([]);

const showBar = $derived.by(() => selectedQuotaItems.length > 0 ? true : false)

const filteredQuotass = $derived.by(() => {
  return quotas.filter((q) => q.name.toLowerCase().includes(searchTerm.toLowerCase()));
})

export function quotasRunes() {
	return {
    get quotas() { return quotas },

    set quotas(qs: Quota[]) { quotas = qs },

    get selectedQuotaItems() { return selectedQuotaItems },

    // set selectedQuotaItems(qs: (Quota[] | [])) { selectedQuotaItems = qs },

		get count() { return quotas.length },

    get showBar() { return showBar },

    get filteredQuotas() {
      return filteredQuotass
    },

    set searchTerm(s: string) {
      searchTerm = s;
    },

    get searchTerm() {
      return searchTerm;
    },

		toggleSingleQuota: (quota: Quota) => {
      const obj = selectedQuotaItems.find(q => q.id === quota.id);

      if(obj){
        selectedQuotaItems = selectedQuotaItems.filter(q => q.id != quota.id);
      } else {
        selectedQuotaItems = [...selectedQuotaItems, quota]
      }
    },

    toggleAllQuota: (e: Event) => {
      const checked = (e.target as HTMLInputElement).checked;
      if (checked) {
        if(searchTerm){
          selectedQuotaItems = filteredQuotass
        }else {
          selectedQuotaItems = quotas
        }
      }
      else {
        selectedQuotaItems = []
      }
    },
    
    deselectQuotas: () => selectedQuotaItems = []
	};
}