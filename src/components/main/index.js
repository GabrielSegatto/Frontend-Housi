import React from 'react'
import { withTranslation } from 'react-i18next'
import Slider from 'react-styled-carousel';


import { Container, Row, Column } from '../layout'
import { TextMedium } from '../typograph/text'
import { TitleLarge } from '../typograph/title'


import { HeartIcon } from '../../assets/icons/main/heart.icon'


import image from '../../assets/images/mainContent-img.png'
import Img1 from '../../assets/images/Images-Grid/Img-1.png'
import Img2 from '../../assets/images/Images-Grid/Img-2.png'
import Img3 from '../../assets/images/Images-Grid/Img-3.png'
import Img4 from '../../assets/images/Images-Grid/Img-4.png'
import Img5 from '../../assets/images/Images-Grid/Img-5.png'
import Img6 from '../../assets/images/Images-Grid/Img-6.png'
import BTFirLogo from '../../assets/images/Carousel/BTFit.png'
import RappiLogo from '../../assets/images/Carousel/Rappi.png'

import { MainContentImg, ImagePlaceHolder, Card, CardImg, ALeft, ARight } from './styled'


const Main = ({ t }) => {

    return (
        <Container>
            <Row justify="center">
                <Column
                    topCustom={50}
                    flex
                    className="flex-column"
                    align="center"
                >
                    <HeartIcon />
                </Column>
            </Row>
            <Row justify="center">
                <Column
                    topCustom={20}
                    xs={10}
                    sm={10}
                >
                    <TitleLarge primary center>
                        {t('main:PITCH')}
                    </TitleLarge>
                </Column>
            </Row>
            <Row>
                <MainContentImg src={image} />
            </Row>
            <Row justify="center">
                <Column
                    topCustom={50}
                    xs={10}
                    sm={10}
                >
                    <TitleLarge primary center>
                        {t('main:PARTNES-PT1')}
                    </TitleLarge>
                    <TextMedium black center>
                        {t('main:PARTNES-PT2')}
                    </TextMedium>
                </Column>
            </Row>
            <Row justify="center">
                <Column
                    flex
                    className="flex-wrap"
                    topCustom={50}
                >
                    <ImagePlaceHolder src={Img1} />
                    <ImagePlaceHolder src={Img2} />
                    <ImagePlaceHolder src={Img3} />
                    <ImagePlaceHolder src={Img4} />
                    <ImagePlaceHolder src={Img5} />
                    <ImagePlaceHolder src={Img6} />
                </Column>
            </Row>
            <Row topCustom={50}>
                <Slider
                    style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}
                    cardsToShow='1'
                    autoSlide='5000'
                    LeftArrow={<ALeft />}
                    RightArrow={<ARight />}
                    
                >
                    <Card>
                        <CardImg src={BTFirLogo} />
                        <TextMedium center black>
                            {t('main:CARD1')}
                        </TextMedium>
                        <TextMedium center bold black>
                            {t('main:CARD1BOLD')}
                        </TextMedium>
                    </Card>
                    <Card>
                        <CardImg src={RappiLogo} />
                        <TextMedium center black>
                            {t('main:CARD2')}
                        </TextMedium>
                        <TextMedium center bold black>
                            {t('main:CARD2BOLD')}
                        </TextMedium>
                    </Card>
                </Slider>
            </Row>
        </Container>
    )
}

export default withTranslation('main')(Main)