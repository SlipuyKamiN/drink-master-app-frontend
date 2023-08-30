import { useEffect } from "react";
import { useSigninMutation } from 'redux/authSlice';


const WelcomePage = () => {
  const [dispatch] = useSigninMutation();
  useEffect(()=> {
    dispatch({ email: 'alex@mail.com', password: 'Passw0rd' });//
  },[dispatch])

  return <div>WelcomePage</div>;
};

export default WelcomePage;
