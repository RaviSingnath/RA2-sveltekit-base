let quotas: Quota[] = $state([]);

let searchTerm: string = $state('');

let sortDirection: string = $state('desc');

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

    set sortDirection(str: string) { sortDirection = str },

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
    
    deselectQuotas: () => selectedQuotaItems = [],

    sortQuotas: (sortCriteria: string) => {
      const sorted = [ ...quotas ];
      quotas = sorted.slice().sort((a, b) => {
        let compA, compB;
        switch (sortCriteria) {
          case 'name':
              compA = a.name.toLowerCase();
              compB = b.name.toLowerCase();
              break;
          case 'status':
              compA = a.is_enabled;
              compB = b.is_enabled;
              break;
          case 'limit':
              compA = a.limit;
              compB = b.limit;
              break;
          default:
            return 0;
        }
        let comparison = 0;
        if (compA > compB) {
          comparison = 1;
        } else if (compA < compB) {
          comparison = -1;
        }
        return (
          (sortDirection === 'desc') ? (comparison * -1) : comparison
        );
      });
    }
	};
}