import styled, {css} from 'styled-components'
import {Settings} from '@styled-icons/evaicons-solid/Settings'
import {KeyboardArrowLeft} from '@styled-icons/material-sharp/KeyboardArrowLeft'
import {Switch} from '@styled-icons/icomoon/Switch'
import {Moon} from '@styled-icons/heroicons-solid/Moon'
import {Grid} from '@styled-icons/bootstrap/Grid'
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus'
import {PermMedia} from '@styled-icons/material-outlined/PermMedia'
import {CommentDots} from '@styled-icons/boxicons-regular/CommentDots'
import {NotificationsNone} from '@styled-icons/material/NotificationsNone'

import Toggle from 'react-dark-mode-toggle';

export const ToggleMode = styled(Toggle)`
margin-left: auto;
outline: none;
`

export const Container  = styled.div`
display:flex;
justify-content: center;
align-items:center;
width: 100wh;
height: fit-content;
padding: 50px 300px;
box-sizing: border-box;
`

export const MobileContainer = styled.div`
width: 400px;
height: 625px;
box-sizing: border-box;
background-color: ${({color})=> color}; 
box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
`

export const IconCon = styled.div`
width: 100%;
padding: 20px;
display: flex;
align-items: center;
box-sizing: border-box;
`
export const Icon = styled.div``

Icon.Arrow = styled(KeyboardArrowLeft) `
 width: 30px;
 height: 30px;
 color: ${({color})=> color};
 cursor: pointer;
`
Icon.Switch = styled(Switch)`
width: 20px;
height: 20px;
color: ${({color})=> color};
cursor: pointer;
margin-left: auto;
`
export const ImgWrapper = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`
export const Img = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
padding: 10px;
margin: 10px;
border: 0.5px solid #000;
`

export const TitleImg = styled.div`
font-size: 22px;
font-style: bold;
font-family: SF Pro Display;
color: ${({color})=> color};
`

export const Deck = styled.div`
font-size: 18px;
font-style: bold;
font-family: SF Pro Display;
color: ${({color})=> color};
`

export const Item = styled.div`
display: flex;
padding: 10px 30px;

`
export const Title = styled.div`
font-size: 18px;
font-style: bold;
font-family: SF Pro Display;
padding-left: 10px;
color: ${({color})=> color};
`
export const Line = styled.div`
width: 85%;
height: 1px;
background: #E9E9E9;
margin:10px 30px;
box-sizing: border-box;
`
Icon.Dark = styled(Moon)`
width: 20px;
height: 20px;
color: ${({color})=> color};
`
Icon.Grid = styled(Grid)`
width: 20px;
height: 20px;
color: #FBB65C;
`
Icon.User = styled(UserCheck)`
width: 20px;
height: 20px;
color:  #FF7EB0;
`
Icon.Group = styled(UserPlus)`
width: 20px;
height: 20px;
color: #36E3FF;
`
Icon.Media = styled(PermMedia)`
width: 20px;
height: 20px;
color: #5476FF;
`
Icon.Settings = styled(Settings)`
width: 20px;
height: 20px;
color: #5476FF;
`
Icon.Commit = styled(CommentDots)`
width: 20px;
height: 20px;
color: #0BC630;
`
Icon.Notification = styled(NotificationsNone)`
width: 20px;
height: 20px;
color: #A394C2;
`
