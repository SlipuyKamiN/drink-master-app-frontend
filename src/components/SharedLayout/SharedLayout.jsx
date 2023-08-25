import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.scss';
import { Suspense } from 'react';
import LoadingSpinner from 'components/Shared/LoadingSpinner';

const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner size={150} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
