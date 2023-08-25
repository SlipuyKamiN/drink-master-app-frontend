import { LiaCocktailSolid } from 'react-icons/lia';
import sass from './LoadingSpinner.module.scss';

const LoadingSpinner = ({ size, color = '#fffff' }) => {
  return (
    <div className={sass.wrapper}>
      <LiaCocktailSolid size={size} color={color} className={sass.icon} />
    </div>
  );
};

export default LoadingSpinner;
