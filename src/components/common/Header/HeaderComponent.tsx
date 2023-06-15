import { Button, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png'; // change this to your logo image
import './HeaderComponent.css';

type Section = {
  name: string; 
  link: string; 
};

type HeaderProps = {
  sections: Section[];
};

const HeaderComponent: React.FC<HeaderProps> = ({sections}) => {
  return (
        <Toolbar className='header'>
          <img className="logo" src={logo} alt="logo" />
          <div className="sections">
            {sections.map((section) => (
              <Button color='inherit'>{section.name}</Button>
            ))}
          </div>
        </Toolbar>
  );
};

export default HeaderComponent;
