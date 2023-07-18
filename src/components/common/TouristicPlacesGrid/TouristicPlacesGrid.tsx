import { useContext } from 'react';
import { DataContext } from '../../../pages/Home/HomePage';
import { Grid } from '@mui/material';
import { ITouristicAttraction } from '../../../utils/types';
import TouristicPlaceCard from '../TouristicPlaceCard/TouristicPlaceCard';

function TouristicPlacesGrid(): JSX.Element {
  const touristicAttractions = useContext(DataContext);

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {touristicAttractions?.data.map(
        (touristicAttraction: ITouristicAttraction, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <TouristicPlaceCard touristicAttraction={touristicAttraction}></TouristicPlaceCard>
          </Grid>
        ),
      )}
    </Grid>
  );
}

export default TouristicPlacesGrid;
