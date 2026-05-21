import { Product } from "./_data/products";
import ProductRowActions from "./ProductRowActions";

interface ProductsTableRowProps {
  product: Product;
}

export default function ProductsTableRow({ product }: ProductsTableRowProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.unitPrice);

  const isOutOfStock = product.quantity === 0;

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors even:bg-gray-50">
      <td className="px-4 py-3 font-mono text-xs text-gray-600">
        {product.sku}
      </td>
      <td className="px-4 py-3 font-medium text-gray-800">{product.name}</td>
      <td className="px-4 py-3">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </td>
      <td className="px-4 py-3 text-center">
        <span
          className={`inline-block px-2.5 py-1 rounded text-sm font-medium ${
            isOutOfStock
              ? "bg-red-100 text-red-700"
              : "text-gray-700 bg-gray-100"
          }`}
        >
          {product.quantity}
        </span>
      </td>
      <td className="px-4 py-3 text-right font-semibold text-gray-800">
        {formattedPrice}
      </td>
      <td className="px-4 py-3 text-right">
        <ProductRowActions productId={product.id} />
      </td>
    </tr>
  );
}
