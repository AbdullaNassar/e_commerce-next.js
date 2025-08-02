'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        
        {product.discount && (
          <div className="absolute top-3 left-3 bg-rose-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
            -{product.discount}%
          </div>
        )}
        
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors duration-200">
          <Heart className="h-4 w-4 text-rose-400 hover:text-rose-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 hover:text-rose-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.discount && (
              <span className="text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-rose-600">
              ${discountedPrice.toFixed(2)}
            </span>
          </div>
          
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="px-3 py-2"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}