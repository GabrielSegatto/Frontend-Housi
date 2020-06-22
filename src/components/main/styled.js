import styled from 'styled-components'

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