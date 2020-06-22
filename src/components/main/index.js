import React from 'react'
import { withTranslation } from 'react-i18next'
import Slider from 'react-styled-carousel';


import { Container, Row, Column } from '../layout'
import { TextMedium } from '../typograph/text'
import { TitleLarge, TitleMedium } from '../typograph/title'


import { HeartIcon } from '../../assets/icons/main/heart.icon'
import DeliveryMan from '../../assets/icons/main/deliveryman.png'



import Img1 from '../../assets/images/Images-Grid/Img-1.png'
import Img2 from '../../assets/images/Images-Grid/Img-2.png'
import Img3 from '../../assets/images/Images-Grid/Img-3.png'
import Img4 from '../../assets/images/Images-Grid/Img-4.png'
import Img5 from '../../assets/images/Images-Grid/Img-5.png'
import Img6 from '../../assets/images/Images-Grid/Img-6.png'
import BTFirLogo from '../../assets/images/Carousel/BTFit.png'
import RappiLogo from '../../assets/images/Carousel/Rappi.png'

import { MainContentImg, ImagePlaceHolder, Card, CardImg, ALeft, ARight, DeliverIcon } from './styled'


const Main = ({ t }) => {

    return (
        <Container>
            <Row justify="center">
                <Column
                    topCustom={50}
                    topCustomD={70}
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
                    topCustomD={70}
                    xs={10}
                    sm={10}
                    md={7}
                    lg={7}
                    xl={7}
                >
                    <TitleLarge primary center centerMd>
                        {t('main:PITCH')}
                    </TitleLarge>
                </Column>
            </Row>
            <Row justify="center">
                <MainContentImg />
            </Row>
            <Row justify="center">
                <Column
                    topCustom={50}
                    topCustomD={80}
                    xs={10}
                    sm={10}
                    md={5}
                    lg={5}
                    xl={5}
                    flex
                    align="center"
                    className="flex-column "
                >
                    <TitleLarge primary center centerMd>
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
                    md={8}
                    lg={8}
                    xl={8}
                >
                    <ImagePlaceHolder src={Img1} />
                    <ImagePlaceHolder src={Img2} />
                    <ImagePlaceHolder src={Img3} />
                    <ImagePlaceHolder src={Img4} />
                    <ImagePlaceHolder src={Img5} />
                    <ImagePlaceHolder src={Img6} />
                </Column>
            </Row>
            <Row
                topCustom={50}
                topCustomD={70}
                justify="center"
            >
                <Column
                   md={4}
                   lg={4}
                   xl={4} 
                >
                    <Slider
                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
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
                </Column>

            </Row>
            <Row justify="center" topCustom={50}>
                <Column
                    xs={7}
                    sm={7}
                    md={6}
                    lg={6}
                    xl={6}
                >
                    <TitleMedium center primary  centerMd>
                        {t('main:THANKSTITLE')}
                    </TitleMedium>
                </Column>
            </Row>
            <Row justify="center" topCustom={30}>
                <Column
                    xs={8}
                    sm={8}
                    md={6}
                    lg={6}
                    xl={6}
                >
                    <TextMedium center  centerMd>
                        {t('main:THANLSTEXT')}
                    </TextMedium>
                </Column>
            </Row>
            <Row justify="center" topCustom={50}>
                <DeliverIcon src={DeliveryMan} />
            </Row>
        </Container>
    )
}

export default withTranslation('main')(Main)