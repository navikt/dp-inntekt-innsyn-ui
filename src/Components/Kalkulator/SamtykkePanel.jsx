import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'nav-frontend-paneler';
import { Hovedknapp } from 'nav-frontend-knapper';
import { useTranslation, Trans } from 'react-i18next';
import { Normaltekst, Innholdstittel } from 'nav-frontend-typografi';
import tracking from '../../lib/tracking';
import Spacer from '../Spacer';
import { LENKER } from '../../lib/constants';

export const SamtykkePanel = ({ onClickCallback }) => {
  const { t } = useTranslation();

  const handleClickMineInntekter = event => {
    event.preventDefault();
    tracking.logEvent('TIL_SKATTEETATEN');
    window.location.assign(LENKER.MINE_INNTEKTER_URL);
  };

  return (
    <Panel>
      <div className="padding16">
        <Innholdstittel tag="h2">{t('SAMTYKKEPANEL.HENTER_INFO_FRA_SKATTEETAEN_TITTEL')}</Innholdstittel>

        <Normaltekst>
          <Trans i18nKey="SAMTYKKEPANEL.HENTER_INFO_FRA_SKATTEETAEN_INGRESS">
            <a href={LENKER.MINE_INNTEKTER_URL} onClick={event => handleClickMineInntekter(event)} className="lenke">
              {LENKER.MINE_INNTEKTER_URL}
            </a>
          </Trans>
        </Normaltekst>
        <Normaltekst>{t('SAMTYKKEPANEL.OPPLYSNINGENE_SLETTES')}</Normaltekst>

        <Spacer twentyPx />
        <div className="flex center">
          <Hovedknapp onClick={onClickCallback}>{t('KNAPP.FORTSETT')}</Hovedknapp>
        </div>
      </div>
    </Panel>
  );
};

SamtykkePanel.propTypes = {
  onClickCallback: PropTypes.func.isRequired,
};

export default SamtykkePanel;
