import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.scss';
import { Suspense, useState, useEffect } from 'react';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import Modal from 'components/Shared/Modal';
import MotivatingModal from 'components/Shared/MotivatingModal';
import { useGetFavoritesQuery } from 'redux/recipesSlice';
import sass from '../Shared/MotivatingModal.module.scss';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  // const [showModal, setShowModal] = useState(true);
  const [contentMotivation, setContentMotivation] = useState('');
  const [styleMotivation, setStyleMotivation] = useState(null);

  const [isOneMotivation, setIsOneMotivation] = useState(false);
  const [isTwoMotivation, setIsTwoMotivation] = useState(false);
  // const [isThreeMotivation, setIsThreeMotivation] = useState(false);

  const dataUser = useSelector(state => state.authApi.queries);
  console.log(dataUser);
  // console.log(dataUser);

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
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner size={150} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {(isOneMotivation || isTwoMotivation) && (
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
