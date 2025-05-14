import { Navigate, Outlet } from 'react-router';

import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';
import NotFound from '@/features/misc/routes/NotFound';
import { ProductsRoutes } from '@/features/products';

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col pe-8">
      <div className="flex items-start">
        <Sidebar />
        <div className="w-full">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.reload()}>
        Refresh
      </Button>
    </div>
  );
};

export const AppRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/products" replace /> },
      { path: 'products/*', element: <ProductsRoutes />, errorElement: <ErrorFallback /> },
      { path: '/404', element: <NotFound />, errorElement: <ErrorFallback /> },
      { path: '*', element: <Navigate to="." />, errorElement: <ErrorFallback /> },
    ],
    errorElement: <ErrorFallback />,
  },
];
