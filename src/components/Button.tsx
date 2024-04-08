import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
}

export function Button({ variant = 'primary', size = 'medium', ...props }: Props) {
  const baseClasses =
    'outline-none rounded cursor-pointer transition duration-200 font-semibold leading-6';

  const variantClasses =
    variant === 'primary'
      ? 'text-gray-50 bg-blue-500 hover:bg-blue-600'
      : 'text-gray-700 bg-gray-100 hover:bg-gray-300';

  const sizeClasses = size === 'medium' ? 'text-base px-4 py-2' : 'text-lg px-6 py-3';

  return <button className={`${baseClasses} ${variantClasses} ${sizeClasses}`} {...props} />;
}
