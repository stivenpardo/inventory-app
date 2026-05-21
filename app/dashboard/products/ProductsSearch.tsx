"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { CiSearch } from "react-icons/ci";

interface ProductsSearchProps {
  defaultValue: string;
}

export default function ProductsSearch({
  defaultValue,
}: ProductsSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(defaultValue);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      const params = new URLSearchParams(searchParams);
      if (newValue.trim()) {
        params.set("q", newValue);
      } else {
        params.delete("q");
      }

      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="mb-6">
      <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
        <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
          <CiSearch />
        </span>
        <input
          type="search"
          placeholder="Search by SKU, name, or category..."
          value={value}
          onChange={handleChange}
          className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
        />
      </div>
    </div>
  );
}
