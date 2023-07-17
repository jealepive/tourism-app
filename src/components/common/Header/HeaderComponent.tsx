import { useNavigate } from 'react-router-dom';
import { Button, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';
import './HeaderComponent.css';
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

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Toolbar className='header'>
      <img className='logo' src={logo} alt='logo' />
      <div className='sections'>
        {sections.map((section, index) => (
          <Button key={index} color='inherit' onClick={() => navigate(section.link)}>
            {section.name}
          </Button>
        ))}
      </div>
    </Toolbar>
  );
};

export default HeaderComponent;
