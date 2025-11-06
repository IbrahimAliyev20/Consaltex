import React from 'react';
import { Products } from '@/types/alltype'; 
import Image from 'next/image';

interface ProductCardProps {
  product: Products;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-w-sm overflow-hidden    ">
      
      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden   border border-[#DBDEE5] rounded-[16px] ">
        <Image
          src={product.image} 
          alt={product.name}
          width={100}
          height={100}
          className='object-cover w-full h-full'
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2  text-xl font-semibold text-gray-900 line-clamp-2   ">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-700 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;