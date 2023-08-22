import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import base from 'styles/common/_base.module.scss';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main className={base.container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
