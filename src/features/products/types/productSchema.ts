import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  brand: z.string().min(1, 'Brand is required'),
  sku: z.string().min(1, 'SKU is required'),
  stock: z.coerce.number().nonnegative(),
  dimensions: z.object({
    width: z.coerce.number().nonnegative(),
    height: z.coerce.number().nonnegative(),
    depth: z.coerce.number().nonnegative(),
  }),
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  images: z.array(z.string().url()),
  price: z.coerce.number().nonnegative(),
  discountPercentage: z.coerce.number().nonnegative().min(0).max(100),
  thumbnail: z.string().optional(),
  availabilityStatus: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
});
