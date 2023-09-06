import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import styles from './SharedLayout.module.scss';
import Motivation from 'components/Shared/Motivation';

const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<LoadingSpinner size={100} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Motivation />
    </div>
  );
};

export default SharedLayout;
