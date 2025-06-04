export type ToastType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface ToastConfig {
  id: string;
  title: string | (() => string);
  description?: string | (() => string);
  type?: ToastType;
  duration?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  dismissible?: boolean;
  icon?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick: () => void;
  };
}
