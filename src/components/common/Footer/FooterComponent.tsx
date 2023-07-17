import { Box, Grid, Typography, Link } from '@mui/material';
import React from 'react';
import logo from '../../../assets/logo.png';
import './FooterComponent.css';
import { language } from '../../../utils/lang.en';

const FooterComponent: React.FC = () => {
  return (
    <Box className='footer'>
      <Grid container className='footer container'>
        <Grid item xs={12} md={6}>
          <Box display='flex' alignItems='center'>
            <img src={logo} alt='Logo' className='footer logo' />
            <Typography variant='h6' component='h1'>
              {language.greeting}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display='flex' justifyContent='flex-end'>
            <Box className='footer section'>
              <Typography variant='h6' component='h2'>
                Social
              </Typography>
              <Link href='#' className=' footer link'>
                Facebook
              </Link>
              <Link href='#' className=' footer link'>
                Instagram
              </Link>
            </Box>
            <Box className='footer section'>
              <Typography variant='h6' component='h2'>
                About
              </Typography>
              <Link href='#' className=' footer link'>
                Contact Us
              </Link>
              <Link href='#' className=' footer link'>
                Privacy Policy
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box display='flex' justifyContent='center' marginTop='16px'>
        <Typography variant='body2' component='p'>
          © 2023 Explore Colombia.
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterComponent;
