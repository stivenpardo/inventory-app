import { CiBoxes } from "react-icons/ci";

interface ProductsEmptyStateProps {
  query: string;
}

export default function ProductsEmptyState({
  query,
}: ProductsEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <CiBoxes size={48} className="mb-4" />
      {query ? (
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600">
            No products match "{query}"
          </p>
          <p className="text-sm mt-2">
            Try adjusting your search terms or clearing the filter
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600">No products yet</p>
          <p className="text-sm mt-2">Add your first product to get started</p>
        </div>
      )}
    </div>
  );
}
