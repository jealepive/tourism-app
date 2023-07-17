import SearchBarComponent from '../../components/common/SearchBar/SearchBarComponent';
import SubtitleComponent from '../../components/common/Subtitle/SubtitleComponent';
import TitleComponent from '../../components/common/Title/TitleComponent';
import { useEffect, useState, createContext } from 'react';
import { language } from '../../utils/lang.en';
import { ITouristicAttractionsResponse } from '../../utils/types';
import { getTouristicAttractions } from '../../services/touristicAtractionService';
import TouristicPlacesGrid from '../../components/common/TouristicPlacesGrid/TouristicPlacesGrid';
import { Box, Typography } from '@mui/material';
import HeaderComponent from '../../components/common/Header/HeaderComponent';
import './HomePage.css';

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
      <Box className='hola'>
        <HeaderComponent />
        <TitleComponent text={language.greeting}></TitleComponent>
        <SubtitleComponent text={language.slogan}></SubtitleComponent>
        <SearchBarComponent
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onClick={handleSearch}
          value={value}
        ></SearchBarComponent>
      </Box>
      {/* //TODO: Mover estilos a un archivo CSS */}
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Box sx={{ maxWidth: '1000px', textAlign: 'center' }}>
          <Typography variant='h4'>Choose your next Adventure</Typography>
          <TouristicPlacesGrid></TouristicPlacesGrid>
        </Box>
      </Box>
    </DataContext.Provider>
  );
}

export { HomePage, DataContext };
