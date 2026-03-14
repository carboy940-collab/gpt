import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const variantStyles =
    variant === 'primary'
      ? 'bg-game-primary text-white hover:opacity-90'
      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50';

  return (
    <button
      className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
