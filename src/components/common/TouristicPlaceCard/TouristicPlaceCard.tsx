import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { ITouristicAttraction } from '../../../utils/types';
import './TouristicPlaceCard.scss';
interface ICardComponentProps {
  touristicAttraction: ITouristicAttraction;
}
function TouristicPlaceCard({ touristicAttraction }: ICardComponentProps): JSX.Element {
  return (
    <Box className='touristic-place__container'>
      <Card className='touristic-place__card'>
        <CardMedia
          component='img'
          alt={touristicAttraction.name}
          height='280'
          image={touristicAttraction.images[0]}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {touristicAttraction.name}
          </Typography>
          <Typography
            className='touristic-place__card__description'
            variant='body2'
            color='text.secondary'
          >
            {touristicAttraction.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className='touristic-place__card__button' size='small'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default TouristicPlaceCard;
