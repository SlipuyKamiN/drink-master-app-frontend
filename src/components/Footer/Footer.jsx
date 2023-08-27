import Container from 'components/Shared/Container';
import FollowUs from './FollowUs';
import Nav from './Nav';
import SubscribeForm from './SubscribeForm';
import Logo from 'components/Header/Logo';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Logo/>
        <FollowUs/>
        <Nav/>
        <SubscribeForm/>
        <div>
          <p>©2023 Drink Master. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
