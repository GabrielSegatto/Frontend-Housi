import styled from 'styled-components'
import image from '../../assets/images/background-header.png'

export const Header = styled.div`
    background-color: #ABABAB; 
    background-image: url(${image});
    background-blend-mode:multiply;
    background-size:100%;
    width:100vw;
    height:100vh;
    display: flex;
    align-items:flex-end;
    padding-bottom:30%;
`