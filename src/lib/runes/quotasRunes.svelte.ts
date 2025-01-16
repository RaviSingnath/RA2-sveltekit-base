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

    get showBar() { return showBar },

    get filteredQuotas() {
      return filteredQuotass
    },

    get searchTerm() {
      return searchTerm;
    },

    set searchTerm(s: string) {
      searchTerm = s;
    },

		toggleSingleQuota: (quota: Quota) => {
      const obj = selectedQuotaItems.find(q => q.id === quota.id);

      if(obj){
        selectedQuotaItems = selectedQuotaItems.filter(q => q.id != quota.id);
      } else {
        selectedQuotaItems = [...selectedQuotaItems, quota]
      }
    },

    toggleAllQuota: (checked: boolean) => {
      if (checked) {
        if(searchTerm){
          selectedQuotaItems = filteredQuotass
        } else {
          selectedQuotaItems = quotas
        }
      }
      else {
        selectedQuotaItems = []
      }
    },
    
    deselectQuotas: () => selectedQuotaItems = [],

    sortQuotas: (sortCriteria: string) => {
      if (sortDirection === "asce") sortDirection = "desc";
      else sortDirection = "asce";

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