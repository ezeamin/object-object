// Polyfill for 'File'
// import { File } from '@web-std/file';
import { z } from 'zod';

// ----------------------------------------------------
// STANDARDS
// ----------------------------------------------------

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

// ----------------------------------------------------
// COMMON RULES
// ----------------------------------------------------

export const titleRules = () =>
  z
    .string()
    .max(60, {
      message: 'The title must be, at most, 60 characters',
    })
    .min(3, {
      message: 'The title must be, at least, 3 characters long',
    });

// TODO: Image should be type File, but optional. Now arrives as "path string"
export const imageRules = () =>
  z
    .any()
    .optional()
    .refine(
      (file) => (!file ? true : file?.size <= MAX_FILE_SIZE),
      `Max image size is ${MAX_FILE_SIZE / 100000}MB.`
    )
    .refine(
      (file) => (!file ? true : ACCEPTED_IMAGE_TYPES.includes(file?.type)),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    );

export const markdownRules = () =>
  z.string().min(3, {
    message: 'The content must be, at least, 3 characters long',
  });

export const typeRules = () =>
  z
    .object({
      description: z.string(),
      id: z.union([z.string(), z.number()]).nullable(),
    })
    .nullable()
    .default(null);

// ----------------------------------------------------
// COMMON REFINES
// ----------------------------------------------------

// At least one field must have value
export const notEmptyForm = (data: object) => {
  return Object.values(data).some(Boolean);
};

notEmptyForm.msg = () => ({
  message: 'At least one field must have value',
});
