"use client";

import { useRouter } from "next/navigation";
import { CiCircleInfo, CiEdit, CiTrash } from "react-icons/ci";

interface ProductRowActionsProps {
  productId: string;
}

export default function ProductRowActions({
  productId,
}: ProductRowActionsProps) {
  const router = useRouter();

  const handleView = () => {
    router.push(`/dashboard/products/${productId}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/products/${productId}/edit`);
  };

  const handleDelete = () => {
    console.log("delete", productId);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleView}
        title="View product"
        className="inline-flex items-center justify-center w-8 h-8 rounded text-sky-600 hover:bg-sky-50 hover:text-sky-800 transition-colors"
      >
        <CiCircleInfo size={18} />
      </button>
      <button
        onClick={handleEdit}
        title="Edit product"
        className="inline-flex items-center justify-center w-8 h-8 rounded text-cyan-600 hover:bg-cyan-50 hover:text-cyan-800 transition-colors"
      >
        <CiEdit size={18} />
      </button>
      <button
        onClick={handleDelete}
        title="Delete product"
        className="inline-flex items-center justify-center w-8 h-8 rounded text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors"
      >
        <CiTrash size={18} />
      </button>
    </div>
  );
}
