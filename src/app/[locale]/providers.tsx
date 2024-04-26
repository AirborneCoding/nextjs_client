'use client';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SkeletonTheme } from "react-loading-skeleton";
import Image from 'next/image';

const Providers = ({ children }: { children: React.ReactNode }) => {

  // const [loading, setLoading] = useState(true);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000 * 5,
          },
        },
      })
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // if (loading) {
  //   return (
  //     <main className="flex items-center justify-center h-screen">
  //       <Image
  //         src="/website/logoamazigh.svg"
  //         alt="لمرصد الوطني للإجرام"
  //         width={500}
  //         height={500}
  //         className='h-3w-36 w-36'
  //       />
  //     </main>
  //   )
  // }

  return (
    <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f8fafc" >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SkeletonTheme>
  );
};
export default Providers;
