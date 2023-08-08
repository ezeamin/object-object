import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  Path,
  PathValue,
  UseFormStateReturn,
} from 'react-hook-form';

import { FormSchemas } from '@/utils/forms';

import { FormHandling } from '@/components/interface/interface';

interface Props<T extends FormSchemas> extends FormHandling<T> {
  defaultValue: string | number | boolean | null;
  render: ({
    field,
    fieldState: { error },
  }: {
    field: ControllerRenderProps<T, Path<T>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
  }) => React.ReactElement;
}

/**
 * React Hook Form's Controller that simplifies typing issues by
 * encapsulating the Controller component, types, and its props
 */

const InputController = <T extends FormSchemas>(props: Props<T>) => {
  const { name, control, defaultValue, render } = props;

  return (
    <Controller
      name={name as unknown as Path<T>}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={render}
    />
  );
};
export default InputController;
