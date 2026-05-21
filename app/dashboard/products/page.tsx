import { Suspense } from "react";
import { PRODUCTS, filterProducts } from "./_data/products";
import ProductsHeader from "./ProductsHeader";
import ProductsSearch from "./ProductsSearch";
import ProductsTable from "./ProductsTable";

interface SearchParams {
  q?: string;
}

function SearchInputSkeleton() {
  return (
    <div className="mb-6">
      <div className="h-10 bg-gray-200 rounded-xl animate-pulse" />
    </div>
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q = "" } = await searchParams;
  const filteredProducts = filterProducts(PRODUCTS, q);

  return (
    <div className="space-y-6">
      <ProductsHeader />
      <Suspense fallback={<SearchInputSkeleton />}>
        <ProductsSearch defaultValue={q} />
      </Suspense>
      <ProductsTable products={filteredProducts} query={q} />
    </div>
  );
}
