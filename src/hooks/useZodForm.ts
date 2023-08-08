import { useEffect } from 'react';
import { useForm as useFormRHF } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodSchema } from 'zod';

import { ErrorToast } from '@/helpers/customSwal';

const useZodForm = <T extends ZodSchema>(validationSchema: T) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormRHF<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    Object.values(errors).forEach((error) => {
      ErrorToast(error?.message?.toString() || 'Revise los campos');
    });
  }, [errors]);

  return {
    onSubmitMiddleware: handleSubmit,
    control,

    // Optional usage - Discouraged
    errors,
  };
};

export default useZodForm;
