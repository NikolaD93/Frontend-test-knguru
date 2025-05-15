import { TiStarFullOutline } from 'react-icons/ti';

import { formatReviewDate } from '@/utils/formatDate';

import type { Product } from '../types/product';

type ProductDetailReviewsProps = {
  product: Product;
};

export default function ProductDetailReviews({ product }: ProductDetailReviewsProps) {
  return (
    <div className="bg-background rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
      <h2 className="mb-7.5 text-2xl">Reviews</h2>

      <div>
        <div className="flex justify-between border-b p-6">
          <p className="w-1/5 text-sm">Ratings</p>
          <p className="w-1/5 text-sm">Customer</p>
          <p className="w-1/5 text-sm text-[#98A4AE]">Comment</p>
          <p className="w-1/5 text-sm text-[#98A4AE]">Email</p>
          <p className="w-1/5 text-sm text-[#98A4AE]">Date</p>
        </div>
        {product.reviews.map((review, id) => {
          return (
            <div
              key={id}
              className={`flex justify-between p-6 ${id !== product.reviews.length - 1 ? 'border-b' : null}`}
            >
              <div className="flex w-1/5 text-xl">
                {[...Array(review.rating)].map((_, index) => (
                  <TiStarFullOutline key={index} className="text-star" />
                ))}
              </div>
              <p className="w-1/5 text-sm">{review.reviewerName}</p>
              <p className="w-1/5 text-sm text-[#98A4AE]">{review.comment}</p>
              <p className="w-1/5 text-sm text-[#98A4AE]">{review.reviewerEmail}</p>
              <p className="w-1/5 text-sm text-[#98A4AE]">{formatReviewDate(review.date)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
