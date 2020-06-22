import styled from 'styled-components'
import imageMobile from '../../assets/images/background-header.png'
import imageDesktop from '../../assets/images/background-header-desktop.png'

export const Header = styled.div`
    background-color: #ABABAB; 
    background-image: url(${imageMobile});
    background-blend-mode:multiply;
    background-size:100%;
    width:100vw;
    height:100vh;
    display: flex;
    align-items:flex-end;
    padding-bottom:30%;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        background-image: url(${imageDesktop});
        align-items:center;
        padding-bottom:0;
    }

`