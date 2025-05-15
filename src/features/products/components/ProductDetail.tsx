import { useState } from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import { useParams } from 'react-router';

import { Home } from '@/assets';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';
import { ErrorFallback } from '@/routes';

import { useProductById } from '../api/getProductById';

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductById(id);
  const [qty, setQty] = useState(1);

  console.log(product);
  if (isLoading) return <Loader />;
  if (!product || isError) return <ErrorFallback />;

  const discountedPrice = product?.price - (product?.price * product?.discountPercentage) / 100;
  const rating = Math.round(product.rating);

  return (
    <div className="bg-muted flex flex-col gap-7.5 rounded-3xl p-7.5">
      <div className="bg-background flex items-center justify-between rounded-2xl px-7.5 py-4 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
        <p className="text-lg font-bold">Product Detail</p>
        <div className="flex items-center gap-2">
          <img src={Home} alt="home icon" />
          <p className="font-bold">/</p>
          <Badge>Product Detail</Badge>
        </div>
      </div>

      <div className="bg-background flex justify-between gap-7.5 rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
        <div className="w-full">
          <img
            className="h-[460px] w-full rounded-md border object-contain"
            src={product.images[0]}
            alt="product image"
            loading="lazy"
          />
          <div className="3xl:gap-4 flex justify-between pt-3.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                className="3xl:w-1/6 h-19.5 w-19.5 rounded-md border object-contain"
                src={product.thumbnail}
                alt={`thumbnail-${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="w-full pt-7.5">
          <div>
            <Button variant="secondary">{product.availabilityStatus}</Button>
            <span className="ml-2.5 text-sm font-semibold text-[#98A4AE] capitalize">
              {product.category}
            </span>
          </div>
          <h2 className="py-3 text-[22px]">{product.title}</h2>
          <div className="flex items-center gap-2">
            <p className="text-lg text-[#98A4AE] line-through">${product.price}</p>
            <p className="text-[22px]">${discountedPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center border-b pt-3 pb-7.5">
            {[...Array(5)].map((_, index) =>
              index < rating ? (
                <TiStarFullOutline key={index} className="text-star" />
              ) : (
                <TiStarOutline key={index} className="text-star" />
              )
            )}
            <span className="ml-3 text-sm">
              ({product.rating} with {product.reviews.length} reviews)
            </span>
          </div>
          <div className="flex flex-col gap-6 border-b py-7.5">
            <div className="flex justify-between">
              <p>Brand</p>
              <span className="font-semibold">{product.brand}</span>
            </div>
            <div className="flex justify-between">
              <p>SKU</p>
              <span className="font-semibold">{product.sku}</span>
            </div>
            <div className="flex justify-between">
              <p>Stock</p>
              <span className="font-semibold">{product.stock}</span>
            </div>
            <div className="flex items-center gap-7.5">
              <p className="font-semibold">QTY:</p>
              <div>
                <button
                  onClick={() => (qty !== 1 ? setQty((prev) => prev - 1) : setQty(1))}
                  className="cursor-pointer rounded-tl-lg rounded-bl-lg border px-4 py-1 text-[#E0E6EB]"
                >
                  -
                </button>
                <span className="border px-4 py-1.5">{qty}</span>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="cursor-pointer rounded-tr-lg rounded-br-lg border px-4 py-1 text-[#E0E6EB]"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="py-7.5">
            <Button size="lg">Edit</Button>
            <p className="pt-7.5 text-sm text-[#98A4AE]">{product.shippingInformation}</p>
            <p className="text-sm">Why the longer time for delivery?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
