// "use client";
// import React from "react";

// export const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
//   return (
//     <textarea
//       ref={ref}
//       className={`flex min-h-[100px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all ${className}`}
//       {...props}
//     />
//   );
// });
// Textarea.displayName = "Textarea";

"use client";
import React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`flex min-h-[100px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all ${className}`}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";