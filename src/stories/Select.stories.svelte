<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { Select } from "$lib/components/input";

  const { Story } = defineMeta({
    title: "Selected Row Bar",
    component: Select,
    tags: ["autodocs"],
    argTypes: {
      error: {},
      selected: { defaultValue: true },
      openUpside: {},
    },
  });
</script>

<!-- Example table with default styling from tailwind and light branding -->
<Story name="Primary" args={{ selected: true, openUpside: false }} />

<Story name="Error" args={{ selected: false, error: "Please choose status" }} />
