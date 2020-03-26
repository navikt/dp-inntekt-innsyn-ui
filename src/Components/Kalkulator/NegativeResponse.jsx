import React from 'react';
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { useTranslation, Trans } from 'react-i18next';
import tracking from '../../lib/tracking';
import { LENKER } from '../../lib/constants';

const NegativeResponse = () => {
  const { t } = useTranslation();

  const handleClickSøknad = event => {
    event.preventDefault();
    tracking.logEvent('TIL_SØKNAD', {
      isOppfyllerInntekstkrav: false,
    });
    window.location.assign(LENKER.DAGPENGER_SØKNAD_URL);
  };

  const handleClickMineInntekter = event => {
    event.preventDefault();
    tracking.logEvent('TIL_SKATTEETATEN', {
      isOppfyllerInntekstkrav: false,
    });
    window.location.assign(LENKER.MINE_INNTEKTER_URL);
  };

  const handleClickFaktasider = event => {
    event.preventDefault();
    tracking.logEvent('TIL_FAKTASIDER', {
      isOppfyllerInntekstkrav: false,
    });
    window.location.assign(LENKER.DAGPENGER_FAKTASIDE_URL);
  };

  return (
    <>
      <Undertittel tag="h3">{t('NEGATIVERESPONSE.RISIKERER_AVSLAG_GRUNNET_LAV_INNTEKT')}</Undertittel>
      <Element>{t('NEGATIVERESPONSE.LIKEVEL_RETT')}</Element>
      <ul>
        <li>{t('NEGATIVERESPONSE.AVTJENT_VERNEPLIKT')}</li>
        <li>{t('NEGATIVERESPONSE.SØKER_FREM_I_TID')}</li>
        <li>{t('NEGATIVERESPONSE.ARBEIDET_I_EØS')}</li>
        <li>{t('NEGATIVERESPONSE.INNTEKT_FRA_FANGST_OG_FISK')}</li>
        <li>
          <Trans i18nKey="NEGATIVERESPONSE.INNTEKTOPPLYSNINGER_ER_FEIL">
            <a href={LENKER.MINE_INNTEKTER_URL} onClick={event => handleClickMineInntekter(event)} className="lenke">
              {LENKER.MINE_INNTEKTER_URL}
            </a>
          </Trans>
        </li>
      </ul>
      <Normaltekst>
        <Trans i18nKey="FELLES.ANBEFALER_SENDE_SØKNAD_ANTALL_UKER">
          <a href={LENKER.DAGPENGER_FAKTASIDE_URL} onClick={event => handleClickFaktasider(event)} className="lenke">
            {LENKER.DAGPENGER_FAKTASIDE_URL}
          </a>
          <a href={LENKER.DAGPENGER_SØKNAD_URL} onClick={event => handleClickSøknad(event)} className="lenke">
            {LENKER.DAGPENGER_SØKNAD_URL}
          </a>
        </Trans>
      </Normaltekst>
    </>
  );
};
export default NegativeResponse;
