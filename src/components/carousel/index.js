import React, { useContext } from 'react'
import Slider from 'react-styled-carousel';
 
export const ExampleSlider = () => {
    return(
        <Slider
            cardsToShow='1'
        >
            <h1>teste</h1>
            <h1>teste2</h1>
            <h1>teste3</h1>
        </Slider>
    )
};
export default (ExampleSlider);
