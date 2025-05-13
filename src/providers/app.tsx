import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { AppRoutes } from '@/routes';

export const AppProvider = () => {
  const queryClient = new QueryClient();
  const Router = createBrowserRouter(AppRoutes);
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <div
            className="text-accent inline-block h-20 w-20 animate-spin rounded-full border-[3px] border-current border-t-transparent"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </Suspense>
  );
};
