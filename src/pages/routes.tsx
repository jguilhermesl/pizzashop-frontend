import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from './404';
import { Dashboard } from './app/dashboard/dashboard';
import { Orders } from './app/orders/orders';
import { Login } from './auth/login';
import { Register } from './auth/register';
import { AppLayout } from './_layouts/app';
import { AuthLayout } from './_layouts/auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);
