import React, { useContext } from 'react'
import { withTranslation } from 'react-i18next'

import { Header as Head } from './styled'

import { TextLarge } from '../typograph/text'
import { TitleLarge } from '../typograph/title'
import { Container, Row, Column } from '../layout'

const Header = ({ t }) => {

  return (
    <Head>
        <Container>
          <Row 
            justify="center"
          >
            <Column
              xs={8}
              sm={8}
            >
              <TitleLarge white center>
                {t('header:CATCHPHRASE')}
              </TitleLarge>
            </Column>
          </Row>
          <Row justify="center">
            <Column
              xs={6}
              sm={6}
            >
              <TextLarge white center>
                {t('header:COMPLEMENT')}
              </TextLarge>
            </Column>
          </Row>
        </Container>
    </Head>
     
  )
}

export default withTranslation('header')(Header)
