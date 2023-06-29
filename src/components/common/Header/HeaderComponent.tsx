import {useNavigate} from 'react-router-dom';
import { Button, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';
import './HeaderComponent.css';

type Section = {
  name: string; 
  link: string; 
};

const sections: Section[] = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
];

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
        <Toolbar className='header'>
          <img className="logo" src={logo} alt="logo" />
          <div className="sections">
            {sections.map((section) => (
              <Button color='inherit' onClick={() => navigate(section.link)}>{section.name}</Button>
            ))}
          </div>
        </Toolbar>
  );
};

export default HeaderComponent;
