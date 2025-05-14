import { ArrowUp, Loader } from 'lucide-react';

import { Pen, Trash } from '@/assets';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ErrorFallback } from '@/routes';

import { useProducts } from '../api/getProducts';

export default function Products() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loader />;
  }

  if (!products || isError) {
    return <ErrorFallback />;
  }
  return (
    <div className="bg-muted rounded-3xl p-8">
      <div className="flex items-center justify-between rounded-t-2xl bg-[#DBF3FF] px-6 py-4">
        <p className="text-lg font-semibold">My Products</p>
        <Button size="lg">Add New Item</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product name</TableHead>
            <TableHead className="flex gap-1">
              Price <ArrowUp />
            </TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead className="text-foreground">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => (
            <TableRow onClick={() => console.log('clicked')} key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price}$</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>%{product.discountPercentage}</TableCell>
              <TableCell className="flex gap-6">
                <img src={Pen} alt="icon pen" />
                <img src={Trash} alt="icon trash" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
