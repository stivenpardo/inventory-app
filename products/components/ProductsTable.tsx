import { Product } from "../_data/products";
import ProductsTableRow from "./ProductsTableRow";
import ProductsEmptyState from "./ProductsEmptyState";

interface ProductsTableProps {
  products: Product[];
  query: string;
}

export default function ProductsTable({ products, query }: ProductsTableProps) {
  if (products.length === 0) {
    return <ProductsEmptyState query={query} />;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold tracking-wide">
          <tr>
            <th className="px-4 py-3">SKU</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3 text-center">Quantity</th>
            <th className="px-4 py-3 text-right">Unit Price</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductsTableRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
