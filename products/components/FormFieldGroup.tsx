"use client";

import { InputHTMLAttributes } from "react";

interface FormFieldGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

export default function FormFieldGroup({
  label,
  error,
  helperText,
  required = false,
  ...inputProps
}: FormFieldGroupProps) {
  return (
    <div>
      <label
        htmlFor={inputProps.id}
        className="block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...inputProps}
        className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
          error ? "border-red-500" : "border-gray-300"
        } disabled:bg-gray-50 disabled:text-gray-500`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
