import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/QueryClient";
import React from "react";

interface QueryProviderProps {
  children: React.ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
