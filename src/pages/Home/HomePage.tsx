import SearchBar from '../../components/common/SearchBar/SearchBar';
import Subtitle from '../../components/common/Subtitle/Subtitle';
import Title from '../../components/common/Title/Title';
import { useEffect, useState, createContext } from 'react';
import { language } from '../../utils/lang.en';
import { ITouristicAttractionsResponse } from '../../utils/types';
import { getTouristicAttractions } from '../../services/touristicAtractionService';
import TouristicPlacesGrid from '../../components/common/TouristicPlacesGrid/TouristicPlacesGrid';
import { Box, Typography } from '@mui/material';
import Header from '../../components/common/Header/Header';
import './HomePage.scss';

const DataContext = createContext<ITouristicAttractionsResponse | undefined>(undefined);

function HomePage(): JSX.Element {
  const [value, setValue] = useState('');
  const [touristicAttractions, setTouristicAttractions] = useState<ITouristicAttractionsResponse>();

  useEffect(() => {
    getTouristicAttractions().then((touristicAttractions) => {
      setTouristicAttractions(touristicAttractions);
    });
  }, []);

  const handleSearch = () => {
    console.log('Searching for', value);
  };

  return (
    <DataContext.Provider value={touristicAttractions}>
      <Box className='home-page__hero-section'>
        <Header />
        <Title text={language.greeting}></Title>
        <Subtitle text={language.slogan}></Subtitle>
        <SearchBar
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onClick={handleSearch}
          value={value}
        ></SearchBar>
      </Box>
      {/* //TODO: Mover estilos a un archivo CSS */}
      <Box className='home-page__touristic-places'>
        <Box className='home-page__touristic-places__container'>
          <Typography variant='h4'>Choose your next Adventure</Typography>
          <TouristicPlacesGrid></TouristicPlacesGrid>
        </Box>
      </Box>
    </DataContext.Provider>
  );
}

export { HomePage, DataContext };
