import { cn } from '@/utils/cn';
import { FormSchemas } from '@/utils/forms';

import InputController from './InputController';

import { InputProps } from '@/components/interface/interface';

const FileInput = <T extends FormSchemas>(props: InputProps<T>) => {
  const { control, name, label, className = '', ...rest } = props;

  return (
    <fieldset className={cn('form-control', className)}>
      <label htmlFor={name as string} className="text-lg">
        {label}
      </label>
      <InputController
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <input
            {...field}
            className={`file-input input-bordered w-full ${
              error && 'border-red'
            }`}
            id={name as string}
            name={name as string}
            type="file"
            {...rest}
          />
        )}
      />
    </fieldset>
  );
};

export default FileInput;
