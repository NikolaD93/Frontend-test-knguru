import { useParams } from 'react-router';

import { Home } from '@/assets';
import { Badge } from '@/components/ui/badge';
import { Loader } from '@/components/ui/loader';
import { ErrorFallback } from '@/routes';

import { useProductById } from '../api/getProductById';

import ProductDetailDesc from './ProductDetailDesc';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailReviews from './ProductDetailReviews';

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductById(id);

  if (isLoading) return <Loader />;
  if (!product || isError) return <ErrorFallback />;

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
      <ProductDetailInfo product={product} />
      <ProductDetailDesc product={product} />
      <ProductDetailReviews product={product} />
    </div>
  );
}
