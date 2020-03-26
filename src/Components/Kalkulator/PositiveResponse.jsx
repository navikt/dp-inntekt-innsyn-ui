import React from 'react';
import PropTypes from 'prop-types';
import { Element, Normaltekst, Innholdstittel } from 'nav-frontend-typografi';
import { useTranslation, Trans } from 'react-i18next';
import tracking from '../../lib/tracking';
import { LENKER } from '../../lib/constants';

export const PositiveResponse = ({ ukesats, periodeAntallUker }) => {
  const { t } = useTranslation();

  const handleClickSøknad = event => {
    event.preventDefault();
    tracking.logEvent('TIL_SØKNAD', {
      isOppfyllerInntekstkrav: true,
    });
    window.location.assign(LENKER.DAGPENGER_SØKNAD_URL);
  };

  const handleClickFaktasider = event => {
    event.preventDefault();
    tracking.logEvent('TIL_FAKTASIDER', {
      isOppfyllerInntekstkrav: true,
    });
    window.location.assign(LENKER.DAGPENGER_FAKTASIDE_URL);
  };

  return (
    <>
      <Element>{t('POSITIVERESPONSE.IDAG_FÅTT_OMTRENT')}</Element>
      <Innholdstittel tag="h3">{t('POSITIVERESPONSE.UKESATS_HVER_UKE', { ukesats, periodeAntallUker })}</Innholdstittel>
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

PositiveResponse.propTypes = {
  ukesats: PropTypes.number.isRequired,
  periodeAntallUker: PropTypes.number.isRequired,
};
export default PositiveResponse;
