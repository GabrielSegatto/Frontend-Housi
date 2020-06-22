import styled from 'styled-components'


import RightArrow from '../../assets/icons/carousel/RightArrow.png'
import LeftArrow  from '../../assets/icons/carousel/LeftArrow.png'



export const MainContentImg = styled.img`
    width:100vw;
    margin-top: 50px;
`

export const ImagePlaceHolder = styled.img`
    width:50%;
    border-radius:5px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 33%
  }
`

export const Card = styled.div`
  width:90%;
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
  mix-blend-mode: luminosity;
  opacity: 0.8;
`

export const ALeft = styled.button`
  width:20px;
  height:20px;
  border:none;
  padding:0;
  background-image: url(${LeftArrow});
  background-size: contain;
  background-color: #fff;
`

export const ARight = styled.button`
  width:20px;
  height:20px;
  border:none;
  padding:0;
  background-image: url(${RightArrow});
  background-size: contain;
  background-color: #fff;
`