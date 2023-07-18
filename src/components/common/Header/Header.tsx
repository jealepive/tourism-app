import { useNavigate } from 'react-router-dom';
import { Box, Button, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';
import './Header.scss';
import { language } from '../../../utils/lang.en';

type Section = {
  name: string;
  link: string;
};

const sections: Section[] = [
  { name: language.homePageName, link: '/' },
  { name: language.aboutPageName, link: '/about' },
  { name: language.contactPageName, link: '/contact' },
];

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Toolbar className='header'>
      <img className='header__logo' src={logo} alt='logo' />
      <Box className='header__sections'>
        {sections.map((section, index) => (
          <Button key={index} color='inherit' onClick={() => navigate(section.link)}>
            {section.name}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
};

export default Header;
