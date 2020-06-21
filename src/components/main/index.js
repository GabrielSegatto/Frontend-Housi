import React, { useContext } from 'react'
import { withTranslation } from 'react-i18next'

import { Container, Row, Column } from '../layout'
import { TextMedium, TextSmall } from '../typograph/text'
import { TitleLarge } from '../typograph/title'

import { HeartIcon } from '../../assets/icons/main/heart.icon'
import image from '../../assets/images/mainContent-img.png'

import { MainContentImg } from './styled'

const Main = ({ t }) => {

  return (
    <Container>
        <Row>
            <HeartIcon />
            <TitleLarge primary>
                {t('main:PITCH')}
            </TitleLarge>
        </Row>
        <Row>
            <MainContentImg src={image} />
        </Row>
        <Row>
            <TextMedium primary>
                {t('main:PARTNES-PT1')}  
            </TextMedium>
            <TextSmall black>
                {t('main:PARTNES-PT2')}
            </TextSmall>
        </Row>
        <Row>
            {/* 6 * imgs */}
        </Row>
    </Container>
  )
}

export default withTranslation('main')(Main)
