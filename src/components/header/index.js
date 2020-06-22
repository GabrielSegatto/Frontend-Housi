import React from 'react'
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
            className="justify-content-md-start"
          >
            <Column
              xs={8}
              sm={8}
              md={4}
              lg={4}
              xl={4}
            >
              <TitleLarge white center>
                {t('header:CATCHPHRASE')}
              </TitleLarge>
            </Column>
          </Row>
          <Row 
            justify="center"
            className="justify-content-md-start"
          >
            <Column
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
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
