import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types'
import exampleData from "../data/quotas.json"
import { quotaSchema } from '$lib/validate-schema/quotaSchema';
import validate from '$lib/utils/validate';

const API_URL = import.meta.env.VITE_API_URL;

export const load = (async () => {
  return {
    dummyData: exampleData
  };
}) satisfies PageServerLoad;

export const actions = {
  updateQuota: async ({ request }) => {
    const form = await request.formData();
    const formData = Object.fromEntries(form)

    const d = {
      is_enabled: formData.is_enabled === "true",
      limit: Number(formData.limit),
      name: formData.name,
      quota_id: formData.quota_id,
    };

    const { data, errors } = await validate(d, quotaSchema);


    console.log(data)
    
    const { data: { quota_id, name, limit, is_enabled } } = data

    // if (!data.success) {
    //   return fail(400, { error: errors })
    // }

    // const URL = `${API_URL}/project/${project_id}/quotas`

    // const result = await fetch(URL, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     "quota_id": quota_id, "name": name, "limit": limit, "is_enabled": is_enabled
    //   }),
    //   headers: {
		// 		'content-type': 'application/json'
		// 	}
    // });

    // const resultData = await result.json();

    // if(resultData.code != 200){
    //   return fail(403, { error: 'Something went wrong, please try again' })
    // }
    return fail(403, { error: 'Something went wrong, please try again' })

    return {
      success: true,
    }
  },
} satisfies Actions;