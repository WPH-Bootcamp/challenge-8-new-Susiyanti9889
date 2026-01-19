import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App';
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TheGorge } from './Home/TheGorge';
=======

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
>>>>>>> 1ae471367a1c93233d26bb62b35b77fdcd901288

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
