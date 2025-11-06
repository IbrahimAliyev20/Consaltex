import React from "react";
import { getProducts } from "@/lib/products";
import ProductGrid from "./ProductGrid";

export default async function ProductsPage() {

  const initialProductsData = await getProducts(1);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-[36px] font-medium text-gray-900 md:text-5xl">
        Innovative Digital Health Solutions
      </h1>

      <ProductGrid
        initialProductsData={initialProductsData}
        fetchMoreProducts={getProducts} 
      />
    </div>
  );
}