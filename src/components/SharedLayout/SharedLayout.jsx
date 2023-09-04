import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.scss';
import { Suspense, useState, useEffect, useCallback } from 'react';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import Modal from 'components/Shared/Modal';
import Motivation from 'components/Shared/Motivation';
import { useGetFavoritesQuery } from 'redux/recipesSlice';
import { useCurrentUserQuery } from 'redux/authSlice';

const SharedLayout = () => {
  const [showModal, setShowModal] = useState(true);
  const [contentMotivation, setContentMotivation] = useState(
    'Wow! You have added the first recipe to your favorites!'
  );
  const [styleMotivation, setStyleMotivation] = useState('sass.wrapperOne');

  const { data } = useGetFavoritesQuery('');
  console.log(data);

  // useEffect(() => {
  //   const handleToggleModal = () => {
  //     setShowModal(!showModal);
  //   };

  //   if (data.totalHits === 1) {
  //     setContentMotivation(
  //       'Wow! You have added the first recipe to your favorites!'
  //     );
  //     setStyleMotivation('wrapperOne');
  //     handleToggleModal();
  //     return;
  //   }
  //   if (data.totalHits === 10) {
  //     setContentMotivation('Wow! You have added 10 recipes to your favorites!');
  //     setStyleMotivation('sass.wrapperTwo');
  //     handleToggleModal();
  //   }
  // }, [data.totalHits, showModal]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner size={150} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {showModal && (
        <Modal>
          <Motivation
            title={contentMotivation}
            style={styleMotivation}
            // closeModal={handleToggleModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default SharedLayout;
