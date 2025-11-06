"use client";
import React, { useState, useTransition } from "react";
import { PaginatedProductsResponse, Products } from "@/types/alltype";
import { useTranslations } from "next-intl";
import ProductCard from "@/components/shared/product-card";


interface ProductGridProps {
  initialProductsData: PaginatedProductsResponse;
  fetchMoreProducts: (
    page: number
  ) => Promise<PaginatedProductsResponse>;
}

export default function ProductGrid({
  initialProductsData,
  fetchMoreProducts,
}: ProductGridProps) {
  const t = useTranslations(); 

  const [products, setProducts] = useState<Products[]>(
    initialProductsData.data
  );
  const [currentPage, setCurrentPage] = useState<number>(
    initialProductsData.meta.current_page
  );
  const [hasNextPage, setHasNextPage] = useState<boolean>(
    !!initialProductsData.links.next
  );

  const [isPending, startTransition] = useTransition();

  const handleLoadMore = () => {
    startTransition(async () => {
      const nextPage = currentPage + 1;
      
      const newData = await fetchMoreProducts(nextPage);

      setProducts((prev) => [...prev, ...newData.data]);
      setCurrentPage(newData.meta.current_page);
      setHasNextPage(!!newData.links.next);
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} product={product} />
        ))}
      </div>

      {hasNextPage && ( 
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={isPending} 
           className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 hidden md:flex items-center cursor-pointer"
          >
              {t("SecTitle.SeeAllServices")}
          </button>
        </div>
      )}
    </>
  );
}