import React from 'react';

type AsProp = React.ElementType;

// Define the props for our Button component
interface ButtonProps {
  as?: AsProp;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  children: React.ReactNode;
}

// Create a generic polymorphic component
const Button = React.forwardRef<
  HTMLElement,
  ButtonProps & { [key: string]: any }
>(
  ({ as = 'button', className, size = 'md', children, ...props }, ref) => {
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
    } as const;

    // Properly type the size property access
    const sizeClass = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.md;

    const classes = `${baseClasses.trim()} ${sizeClass} ${className ?? ''}`;

    // Determine which props to pass based on the 'as' element
    const isButton = as === 'button';
    const isAnchor = as === 'a';

    // Filter props based on element type
    const buttonProps: Record<string, any> = {};
    const anchorProps: Record<string, any> = {};

    Object.entries(props).forEach(([key, value]) => {
      // Skip React-specific props that we'll handle specially
      if (key === 'children' || key === 'key' || key === 'ref') return;

      // For button elements
      if (isButton) {
        // Only add props that are valid for button elements
        if (
          key === 'type' ||
          key === 'disabled' ||
          key === 'autoFocus' ||
          key === 'form' ||
          key === 'formAction' ||
          key === 'formEncType' ||
          key === 'formMethod' ||
          key === 'formNoValidate' ||
          key === 'formTarget' ||
          key === 'name' ||
          key === 'value' ||
          key.startsWith('on') // Event handlers
        ) {
          buttonProps[key] = value;
        }
      }

      // For anchor elements
      if (isAnchor) {
        // Only add props that are valid for anchor elements
        if (
          key === 'href' ||
          key === 'target' ||
          key === 'rel' ||
          key === 'download' ||
          key === 'hreflang' ||
          key === 'type' ||
          key.startsWith('on') // Event handlers
        ) {
          anchorProps[key] = value;
        }
      }
    });

    // Use JSX.IntrinsicElements to properly type the dynamic element
    const Component = as as React.ElementType;

    return (
      <Component
        ref={ref as React.Ref<any>}
        className={classes}
        {...(isButton ? buttonProps : anchorProps)}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;