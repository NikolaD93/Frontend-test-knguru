import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { VITE_BACKEND_API } from '@/config';

import { type Product } from '../types/product';

export const updateProduct = async (
  id: string,
  updatedData: Partial<Product>
): Promise<Product> => {
  const response = await axios.put(`${VITE_BACKEND_API}/${id}`, updatedData);
  return response.data;
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updatedData }: { id: string; updatedData: Partial<Product> }) =>
      updateProduct(id, updatedData),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['product', id]);
    },
  });
};
