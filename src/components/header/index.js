import React, { useContext } from 'react'
import { withTranslation } from 'react-i18next'

import { Background } from './styled'

import { TextMedium } from '../typograph/text'
import { TitleLarge } from '../typograph/title'
const Header = ({ t }) => {

  return (
    <Background>
      <TitleLarge white>
        {t('header:CATCHPHRASE')}
      </TitleLarge>
      <TextMedium white>
        {t('header:COMPLEMENT')}
      </TextMedium>
    </Background>
  )
}

export default withTranslation('header')(Header)
