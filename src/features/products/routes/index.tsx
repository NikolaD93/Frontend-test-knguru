import { Navigate, Route, Routes } from 'react-router';

import EditProduct from '../components/EditProduct';
import ProductDetail from '../components/ProductDetail';
import Products from '../components/Products';

export const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Products />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
