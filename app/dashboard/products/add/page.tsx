import Link from "next/link";
import ProductForm from "@/products/components/ProductForm";

export default function AddProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/dashboard/products"
          className="text-sm text-sky-600 hover:text-sky-700 font-medium mb-4 inline-block"
        >
          ← Back to Products
        </Link>
        <h1 className="text-2xl font-semibold text-gray-800">Add New Product</h1>
        <p className="text-sm text-gray-500 mt-1">
          Fill in the details below to add a new product to your inventory
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <ProductForm />
      </div>
    </div>
  );
}
