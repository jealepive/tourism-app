import HeaderComponent from "../../components/common/Header/HeaderComponent";
import SubtitleComponent from "../../components/common/Subtitle/SubtitleComponent";
import TitleComponent from "../../components/common/Title/TitleComponent";

function HomePage() : JSX.Element{
    const sections = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
      ];
    
    const titleText = "Welcome";
    const subtitleText = "to my page";
    return(
        <>
            <HeaderComponent sections={sections}></HeaderComponent>
            <TitleComponent text= {titleText}></TitleComponent>
            <SubtitleComponent text = {subtitleText}></SubtitleComponent>
        </>
    );
}

export default HomePage;