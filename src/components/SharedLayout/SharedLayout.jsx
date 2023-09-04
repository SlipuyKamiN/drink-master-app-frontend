import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetFavoritesQuery } from 'redux/recipesSlice';
import { getUserState } from 'redux/userSelectors';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import Modal from 'components/Shared/Modal';
import MotivatingModal from 'components/Shared/MotivatingModal';

import styles from './SharedLayout.module.scss';
import sass from '../Shared/MotivatingModal.module.scss';

const SharedLayout = () => {
  const [contentMotivation, setContentMotivation] = useState('');
  const [styleMotivation, setStyleMotivation] = useState(null);
  const [isOneMotivation, setIsOneMotivation] = useState(false);
  const [isTwoMotivation, setIsTwoMotivation] = useState(false);
  const [isThreeMotivation, setIsThreeMotivation] = useState(false);
  const dataUser = useSelector(getUserState);

  const { data } = useGetFavoritesQuery('');

  const handleToggleModal = () => {
    if (isOneMotivation) {
      setIsOneMotivation(!isOneMotivation);
      return;
    }

    if (isTwoMotivation) {
      setIsTwoMotivation(!isTwoMotivation);
      return;
    }

    if (isThreeMotivation) {
      setIsThreeMotivation(!isThreeMotivation);
      return;
    }
  };

  useEffect(() => {
    if (data && data.totalHits === 1) {
      setContentMotivation(
        'Wow! You have added the first recipe to your favorites!'
      );
      setStyleMotivation(sass.wrapperOne);
      setIsOneMotivation(true);
    }

    if (data && data.totalHits === 10) {
      setContentMotivation('Wow! You have added 10 recipes to your favorites!');
      setStyleMotivation(sass.wrapperTwo);
      setIsTwoMotivation(true);
    }

    const quantityDay = Math.round(dataUser.sinceSignUp / 1000 / 60 / 60 / 24);
    if (quantityDay >= 10 && quantityDay <= 11) {
      setContentMotivation(
        `Wow! You have been using the application for ${quantityDay} days!`
      );
      setStyleMotivation(sass.wrapperThree);
      setIsThreeMotivation(true);
    }
  }, [data, dataUser.sinceSignUp]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner size={150} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {(isOneMotivation || isTwoMotivation || isThreeMotivation) && (
        <Modal toggleModal={handleToggleModal}>
          <MotivatingModal
            title={contentMotivation}
            style={styleMotivation}
            toggleModal={handleToggleModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default SharedLayout;
