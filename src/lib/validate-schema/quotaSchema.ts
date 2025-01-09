import { z } from "zod"

export const quotaSchema = z.object({
  limit: z.number({
    required_error: 'Limit is required',
    invalid_type_error: "Limit must be a number",
  })
  .positive(),

  is_enabled: z.boolean({
    required_error: "Status is required",
    invalid_type_error: "Status must be a boolean",
  })
});

export const bulkQuotaSchema = z.object({
  limit: z.number({
    required_error: 'Limit is required',
    invalid_type_error: "Limit must be a number",
  })
  .positive().optional(),

  is_enabled: z.boolean({
    required_error: "Status is required",
    invalid_type_error: "Status must be a boolean",
  })
});

export type QuotaFormData = z.infer<typeof quotaSchema>;