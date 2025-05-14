import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';
import { ErrorFallback } from '@/routes';

import { useProducts } from '../api/getProducts';

import Pagination from './Pagination';
import ProductsTable from './ProductsTable';

export default function Products() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const skip = (page - 1) * limit;

  const { data, isLoading, isError } = useProducts({ limit, skip });

  if (isLoading) {
    return <Loader />;
  }

  if (!data || isError) {
    return <ErrorFallback />;
  }

  const totalPages = Math.ceil(data.total / limit);
  return (
    <div className="bg-muted rounded-3xl p-8">
      <div className="rounded-2xl shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
        <div className="flex items-center justify-between rounded-t-2xl bg-[#DBF3FF] px-6 py-4">
          <p className="text-lg font-semibold">My Products</p>
          <Button size="lg">Add New Item</Button>
        </div>
        <ProductsTable products={data.products} />
        <Pagination
          page={page}
          totalPages={totalPages}
          limit={limit}
          setLimit={setLimit}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
