import { Suspense } from "react";
import { PRODUCTS, filterProducts } from "../../../products/_data/products";
import ProductsHeader from "../../../products/components/ProductsHeader";
import ProductsSearch from "../../../products/components/ProductsSearch";
import ProductsTable from "../../../products/components/ProductsTable";

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
