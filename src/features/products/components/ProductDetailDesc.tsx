import type { Product } from '../types/product';

type ProductDetailDescProps = {
  product: Product;
};

export default function ProductDetailDesc({ product }: ProductDetailDescProps) {
  return (
    <div className="bg-background rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
      <h2 className="text-2xl">Description</h2>
      <p className="py-7.5 text-sm">{product?.description}</p>

      <div className="flex gap-6">
        <div className="bg-muted flex w-full flex-col gap-4 rounded-lg p-3">
          <h4 className="font-semibold">Dimensions</h4>
          <div className="flex justify-between">
            <p>Width</p>
            <span className="font-semibold">{product?.dimensions.width}</span>
          </div>
          <div className="flex justify-between">
            <p>Height</p>
            <span className="font-semibold">{product?.dimensions.height}</span>
          </div>
        </div>
        <div className="bg-muted flex w-full flex-col gap-4 rounded-lg p-3">
          <h4 className="font-semibold">Warranty and shipping</h4>
          <div className="flex justify-between">
            <p>Warranty</p>
            <span className="font-semibold">{product?.warrantyInformation}</span>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <span className="font-semibold">{product?.shippingInformation}</span>
          </div>
        </div>
      </div>

      <h5 className="mt-7.5 mb-3 font-semibold">Tags:</h5>
      <div className="flex gap-3">
        {product?.tags?.map((tag, id) => {
          return (
            <span key={id} className="bg-muted rounded-lg px-2.5 py-2 text-sm capitalize">
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
