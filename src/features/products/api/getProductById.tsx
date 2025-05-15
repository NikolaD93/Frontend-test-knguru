import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { VITE_BACKEND_API } from '@/config';

import { type Product } from '../types/product';

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`${VITE_BACKEND_API}/${id}`);
  return response.data;
};

export const useProductById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });
};
