import React, {useState, useContext} from "react";
import {Container,Title, ToggleMode, Line, TitleImg, Deck, Item, ImgWrapper, Img, MobileContainer, Icon, IconCon} from './Styled';
import img from './images/react.png';
import { ThemeContext } from "./context";

const App = ()=>{
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext)
  
  const dark = {
    icon: "black",
    title: "black",
    background: "white"
  }
  const light = {
    icon: "white",
    title: "white",
    background: "black"
  }
  const onChange = ()=>{
      setMode(!mode)
      setTheme(mode ? dark : light)
  }

  return(
      <Container >
         <MobileContainer color={theme.background}>
             <IconCon>
                 <Icon.Arrow color={theme.icon} /> 
                 <Icon.Switch color={theme.icon} /> 
             </IconCon>
             <ImgWrapper>
                <Img src={img} alt="react logo"/>
                <TitleImg color={theme.title}> React Js Developer</TitleImg>
                <Deck color={theme.title}>Junior</Deck>
             </ImgWrapper>
             {/* first item  */}
             <Item>
                 <Icon.Dark color={theme.icon}/>
                 <Title color={theme.title}>Dark Mode</Title>
                 <ToggleMode
                 onChange={onChange}
                 checked={mode}
                 size={50}
                 />
             </Item>
             {/* Grid item  */}
             <Item>
                 <Icon.Grid />
                 <Title color={theme.title} > Story</Title>
             </Item>
             {/* User item  */}
             <Item>
                 <Icon.User  />
                 <Title color={theme.title} >Chat Head</Title>
             </Item>
             {/* Grid item  */}
             <Item>
                 <Icon.Group />
                 <Title color={theme.title} >Groups</Title>
             </Item>
             <Line />
             {/* Perm media item  */}
             <Item>
                 <Icon.Media />
                 <Title color={theme.title} >Media and Photos</Title>
             </Item>
             {/* Settings item  */}
             <Item>
                 <Icon.Settings />
                 <Title color={theme.title} >Settings</Title>
             </Item>

             {/* Commits item  */}
             <Item>
                 <Icon.Commit />
                 <Title color={theme.title} >Commits</Title>
             </Item>

             {/* Notification item  */}
             <Item>
                 <Icon.Notification />
                 <Title color={theme.title} >Notifications</Title>
             </Item>

         </MobileContainer>
      </Container>
  )
}
export default App;