import { z } from 'zod';

import {
  imageRules,
  markdownRules,
  notEmptyForm,
  titleRules,
} from '../rules/rules';

// EVERY validation for this form should be included in this schema.
// For documentation on how to validate, check https://zod.dev

// Common rules can be found in src\forms\rules\rules.ts
// It's encouraged to create new rules there and use them here, for reusability

export const postFormSchema = z
  .object({
    title: titleRules(),
    coverImage: imageRules(),
    content: markdownRules(),
  })
  .refine(notEmptyForm, notEmptyForm.msg);

// IMPORTANT - Export type and add it in index.ts FormSchemas
export type PostFormSchema = z.infer<typeof postFormSchema>;
