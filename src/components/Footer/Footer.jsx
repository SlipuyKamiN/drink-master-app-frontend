import Container from 'components/Shared/Container';
import FollowUs from './FollowUs';
import Nav from './Nav';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <footer>
      <Container>
        <FollowUs/>
        <Nav/>
        <SubscribeForm/>
      </Container>
    </footer>
  );
};

export default Footer;
