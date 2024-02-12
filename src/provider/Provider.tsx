'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React, { useState } from 'react';

const Provider = ({ children }: any) => {
  const [client] = useState(new QueryClient());
  return (
    <div>
      <QueryClientProvider client={client}>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      </QueryClientProvider>
    </div>
  );
};

export default Provider;
