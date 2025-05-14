import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { VITE_BACKEND_API } from '@/config';

import { type Product } from '../types/product';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${VITE_BACKEND_API}?limit=10`);
  return response.data.products;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
