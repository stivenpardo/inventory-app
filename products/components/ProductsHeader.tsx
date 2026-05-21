import Link from "next/link";

export default function ProductsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage and organize your inventory
        </p>
      </div>
      <Link
        href="/dashboard/products/add"
        className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
      >
        + Add Product
      </Link>
    </div>
  );
}
