import { Typography } from '@mui/material';

type SubtitleComponentProps = {
  text: string;
};

function Subtitle(props: SubtitleComponentProps) {
  return (
    <>
      <Typography variant='h4'>{props.text}</Typography>
    </>
  );
}

export default Subtitle;
