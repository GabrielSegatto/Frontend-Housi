import styled from 'styled-components'


import RightArrow from '../../assets/icons/carousel/RightArrow.png'
import LeftArrow  from '../../assets/icons/carousel/LeftArrow.png'
import imageMobile from '../../assets/images/mainContentImg.png'
import imageDesktop from '../../assets/images/mainContentImgDesktop.png'


export const MainContentImg = styled.div`
    width:100vw;
    height:300px;
    margin-top: 50px;
    background-image: url(${imageMobile});
    background-size: contain;
    background-repeat:no-repeat;
    background-position:center;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        width:70vw;
        height:500px;
        margin-top: 70px;
        background-image: url(${imageDesktop})
    }
`

export const ImagePlaceHolder = styled.img`
    width:50%;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 33%
  }
`

export const Card = styled.div`
  width:100%;
  padding: 30px 0;
  border-top: 1px solid #FA3C6E;
  border-bottom: 1px solid #FA3C6E;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const CardImg = styled.img`
  height:60px;
  margin-bottom:5px;
  opacity: 0.8;
  mix-blend-mode: luminosity; 
`

export const ALeft = styled.button`
  display:flex;
  width:20px;
  height:20px;
  border:none;
  padding:0;
  background-image: url(${LeftArrow});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
  outline:none;
`

export const ARight = styled.button`
  width:20px;
  height:20px;
  border:none;
  padding:0;
  background-image: url(${RightArrow});
  background-size: contain;
  background-color: #fff;
  background-repeat: no-repeat;
  outline:none;
`

export const DeliverIcon = styled.img`
  width:80%;
  max-width:300px;
  margin-bottom:50px;
`


