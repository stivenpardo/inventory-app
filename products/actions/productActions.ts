"use server";

import { Product } from "@/products/_data/products";
import { redirect } from "next/navigation";

interface CreateProductInput {
  sku: string;
  name: string;
  category: string;
  quantity: number;
  unitPrice: number;
}

export async function createProduct(data: CreateProductInput) {
  const errors: Record<string, string> = {};

  if (!data.sku?.trim()) {
    errors.sku = "SKU is required";
  }

  if (!data.name?.trim()) {
    errors.name = "Product name is required";
  }

  if (!data.category?.trim()) {
    errors.category = "Category is required";
  }

  if (data.quantity < 0) {
    errors.quantity = "Quantity cannot be negative";
  }

  if (data.unitPrice < 0) {
    errors.unitPrice = "Unit price cannot be negative";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  const newProduct: Product = {
    id: Date.now().toString(),
    sku: data.sku.trim(),
    name: data.name.trim(),
    category: data.category.trim(),
    quantity: data.quantity,
    unitPrice: data.unitPrice,
  };

  console.log("Product created:", newProduct);

  redirect("/dashboard/products");
}
