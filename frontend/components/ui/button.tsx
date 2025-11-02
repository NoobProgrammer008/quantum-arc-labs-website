// "use client";

// import React from "react";

// export const Button = React.forwardRef(({ 
//   className = "", 
//   variant = "default", 
//   size = "default", 
//   children,
//   disabled = false,
//   ...props 
// }, ref) => {
//   const baseStyles =
//     "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";
  
//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-100",
//     ghost: "hover:bg-gray-100"
//   };
  
//   const sizes = {
//     default: "h-10 px-4 py-2 text-sm",
//     sm: "h-9 px-3 text-sm",
//     lg: "h-14 px-8 text-base",
//     icon: "h-10 w-10"
//   };

//   return (
//     <button
//       ref={ref}
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       disabled={disabled}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// });

// Button.displayName = "Button";
"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  className = "", 
  variant = "default", 
  size = "default", 
  children,
  disabled = false,
  ...props 
}, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-100",
    ghost: "hover:bg-gray-100"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-14 px-8 text-base",
    icon: "h-10 w-10"
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";