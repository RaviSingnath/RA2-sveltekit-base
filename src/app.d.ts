// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

  type Quota = {
    name: string;
    limit: number;
    is_enabled: boolean;
    project_id: string;
    id: string;
    }
}

export {};
