import Typography from '@mui/material/Typography';

type TitleComponentProps = {
    text: string
}

function TitleComponent(props: TitleComponentProps): JSX.Element {
    return (
        <>
            <Typography variant="h1">{props.text}</Typography>                              
        </>    
    );
}

export default TitleComponent;
