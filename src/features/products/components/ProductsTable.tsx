import { ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Pen, Trash } from '@/assets';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { type Product } from '../types/product';

type ProductsTableProps = {
  products: Product[];
};

export default function ProductsTable({ products }: ProductsTableProps) {
  const navigate = useNavigate();
  return (
    <>
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
          {products?.map((product: Product) => (
            <TableRow onClick={() => navigate(`/products/${product.id}`)} key={product.id}>
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
    </>
  );
}
