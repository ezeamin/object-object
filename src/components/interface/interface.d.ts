import { Control } from 'react-hook-form';

import { FormSchemas } from '@/utils/forms';

// ----------------------------------------------------------------------
// FORMS
// ----------------------------------------------------------------------

export interface FormHandling<T extends FormSchemas> {
  control: Control<T>;
  name: keyof T;
}

export interface InputProps<T extends FormSchemas>
  extends FormHandling<T>,
    React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}
