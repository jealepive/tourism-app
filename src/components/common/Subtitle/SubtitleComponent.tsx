import { Typography } from "@mui/material";

type SubtitleComponentProps = {
    text: string
}

function SubtitleComponent(props: SubtitleComponentProps){
    return(
        <>
            <Typography variant="h2">{props.text}</Typography>            
        </>
    );
}

export default SubtitleComponent;