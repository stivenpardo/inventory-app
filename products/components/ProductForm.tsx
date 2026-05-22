"use client";

import { useState } from "react";
import Link from "next/link";
import FormFieldGroup from "./FormFieldGroup";
import { createProduct } from "@/products/actions/productActions";

const CATEGORIES = ["Electronics", "Clothing", "Tools", "Home", "Other"];

export default function ProductForm() {
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    category: "",
    quantity: 0,
    unitPrice: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const parsedValue =
      type === "number" ? (value === "" ? 0 : parseFloat(value)) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await createProduct(formData);

      if (!result?.success && result?.errors) {
        setErrors(result.errors);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        submit: "Failed to create product. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormFieldGroup
        id="sku"
        name="sku"
        type="text"
        label="SKU"
        placeholder="e.g., ELEC-001"
        value={formData.sku}
        onChange={handleChange}
        error={errors.sku}
        required
        disabled={isSubmitting}
      />

      <FormFieldGroup
        id="name"
        name="name"
        type="text"
        label="Product Name"
        placeholder="e.g., Wireless Headphones"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        disabled={isSubmitting}
      />

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category <span className="text-red-500">*</span>
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
            errors.category ? "border-red-500" : "border-gray-300"
          } disabled:bg-gray-50 disabled:text-gray-500`}
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormFieldGroup
          id="quantity"
          name="quantity"
          type="number"
          label="Quantity"
          placeholder="0"
          value={formData.quantity}
          onChange={handleChange}
          error={errors.quantity}
          required
          min="0"
          disabled={isSubmitting}
        />

        <div>
          <label
            htmlFor="unitPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Unit Price <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500">
            <span className="px-4 py-2 text-gray-500 font-medium">$</span>
            <input
              id="unitPrice"
              name="unitPrice"
              type="number"
              placeholder="0.00"
              value={formData.unitPrice}
              onChange={handleChange}
              min="0"
              step="0.01"
              disabled={isSubmitting}
              className="flex-1 px-0 py-2 border-0 focus:outline-none focus:ring-0 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
          {errors.unitPrice && (
            <p className="mt-1 text-sm text-red-500">{errors.unitPrice}</p>
          )}
        </div>
      </div>

      {errors.submit && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{errors.submit}</p>
        </div>
      )}

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? "Adding..." : "Add Product"}
        </button>
        <Link
          href="/dashboard/products"
          className="flex-1 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
