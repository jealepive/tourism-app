import SearchBarComponent from "../../components/common/SearchBar/SearchBarComponent";
import SubtitleComponent from "../../components/common/Subtitle/SubtitleComponent";
import TitleComponent from "../../components/common/Title/TitleComponent";
import { useState } from 'react';

function HomePage() : JSX.Element{
    const [value, setValue] = useState('');

    const handleSearch = () => {
        console.log('Searching for', value);
      };

    const titleText = "Welcome";
    const subtitleText = "to my page";

    // const ContentWrapper = ({children} :any) => <><h1>header</h1>{children}<h1>footer</h1></>
    return(
        <>            
            <TitleComponent text= {titleText}></TitleComponent>
            <SubtitleComponent text = {subtitleText}></SubtitleComponent>
            <SearchBarComponent onChange={(e) => {setValue(e.target.value)}} onClick={handleSearch} value={value}></SearchBarComponent>
        </>
    );
}


export default HomePage;