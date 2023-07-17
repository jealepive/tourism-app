import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { ITouristicAttraction } from '../../../utils/types';

interface ICardComponentProps {
  touristicAttraction: ITouristicAttraction;
}
function TouristicPlaceCard({ touristicAttraction }: ICardComponentProps): JSX.Element {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Card sx={{ position: 'relative', maxWidth: 350, minHeight: '450px' }}>
        <CardMedia
          component='img'
          alt={touristicAttraction.name}
          height='280'
          image={touristicAttraction.images[0]}
        />
        {/* //TODO: Add min height to card content so all cards have the same height */}
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {touristicAttraction.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            {touristicAttraction.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' sx={{ position: 'absolute', bottom: '0px' }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default TouristicPlaceCard;
