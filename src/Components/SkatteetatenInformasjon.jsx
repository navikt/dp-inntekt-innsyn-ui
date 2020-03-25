import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import {Trans} from 'react-i18next';
import {LENKER} from "../lib/constants";
import tracking from "../lib/tracking";

const SkatteEtatenInformasjon = () => {
  const handleClickSkatteetaten = event => {
    event.preventDefault();
    tracking.logEvent('TIL_SKATTEETATEN', {
      isOppfyllerInntekstkrav: true,
    });
    window.location.assign(LENKER.DAGPENGER_FAKTASIDE_URL);
  };

  return (
    <div className="flex center vertical textcenter">
      <Normaltekst>
        <Trans i18nKey="FELLES.ANBEFALER_SENDE_SØKNAD_ANTALL_UKER">
          <a href={LENKER.DAGPENGER_FAKTASIDE_URL} onClick={event => handleClickSkatteetaten(event)} className="lenke">
            {LENKER.DAGPENGER_FAKTASIDE_URL}
          </a>
        </Trans>
      </Normaltekst>
    </div>
  );
};
export default SkatteEtatenInformasjon;
