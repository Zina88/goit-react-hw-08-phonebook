import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import Footer from './Footer';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.body}>
      <div className={css.container}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </div>

      <Footer />
    </div>
  );
};
