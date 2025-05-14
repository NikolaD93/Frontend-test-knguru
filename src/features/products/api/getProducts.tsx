import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { VITE_BACKEND_API } from '@/config';

import { type Product } from '../types/product';

type UseProductsParams = {
  limit: number;
  skip: number;
};

type ProductsResponseData = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const fetchProducts = async ({ limit, skip }: UseProductsParams): Promise<ProductsResponseData> => {
  try {
    const response = await axios.get(`${VITE_BACKEND_API}?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};

export const useProducts = (params: UseProductsParams) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => fetchProducts(params),
    staleTime: 1000 * 60,
  });
};
