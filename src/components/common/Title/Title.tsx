import Typography from '@mui/material/Typography';

type TitleComponentProps = {
  text: string;
};

function Title(props: TitleComponentProps): JSX.Element {
  return (
    <>
      <Typography variant='h1'>{props.text}</Typography>
    </>
  );
}

export default Title;
