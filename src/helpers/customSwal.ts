import Swal, {
  type SweetAlertOptions,
  type SweetAlertResult,
} from 'sweetalert2';

import { CustomSwalArgs } from './interface';

const customSwal = async (args: CustomSwalArgs) => {
  const theme = localStorage.getItem('theme');

  const colorConfig =
    theme === 'dark'
      ? {
          background: '#686868',
          color: '#fafafa',
        }
      : {};

  return Swal.fire({
    confirmButtonColor: '#5c7aea',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    customClass: {
      confirmButton: 'swal2-button',
      cancelButton: 'swal2-button',
    },

    ...args,
    ...colorConfig,
  });
};

const customToast = async (
  args: SweetAlertOptions<unknown, unknown>
): Promise<SweetAlertResult<unknown>> => {
  let color;

  switch (args.icon) {
    case 'error':
      color = '#f3d7d7';
      break;
    case 'warning':
      color = '#ece2d1';
      break;
    case 'success':
      color = '#daeeda';
      break;
    default:
      color = '#fff';
      break;
  }

  const swal = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: args.timer || 3000,
    timerProgressBar: true,
    background: color,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  return swal.fire({ ...args });
};

const ErrorToast = (text: string, time = 3000) => {
  return customToast({
    icon: 'error',
    title: text,
    timer: time,
  });
};

const SuccessToast = (text: string, time = 3000) => {
  return customToast({
    icon: 'success',
    title: text,
    timer: time,
  });
};

export { customSwal, customToast, ErrorToast, SuccessToast };
