import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: keyof JSX.IntrinsicElements;
  size?: 'lg' | 'md' | 'sm';
}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ as = 'button', className, size = 'md', ...props }, ref) => {
    const baseClasses = `
      bg-violet text-white font-syne font-bold text-sm
      rounded-full transition-colors duration-200
      hover:bg-violet/90
      active:scale-95
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/40
      disabled:bg-violet/30 disabled:text-white/40 disabled:cursor-not-allowed
    `;

    const sizeClasses = {
      lg: 'px-10 py-4 text-base',
      md: 'px-8 py-3.5 text-sm',
      sm: 'px-5 py-2 text-xs',
    }[size];

    const classes = `${baseClasses.trim()} ${sizeClasses.trim()} ${className ?? ''}`;

    const Component = as as React.ElementType;

    return (
      <Component
        ref={ref}
        className={classes}
        {...props}
      >
        {props.children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;