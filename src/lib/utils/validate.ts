const validate = async (formData, schema) => {
  let errors = {}
  const data = await schema.safeParse(formData);

		if (!data.success) {
			data.error.errors.map((error) => {
        errors = { ...errors, [error.path[0]]: error.message };
			});
    }

    return {
      data,
      errors
    }
}

export default validate