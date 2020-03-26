import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import {Trans} from 'react-i18next';
import {LENKER} from "../../lib/constants";
import tracking from "../../lib/tracking";
import {Panel} from "nav-frontend-paneler";

const NedreInformasjonsBoks = () => {
  const handleClickSkatteetaten = event => {
    tracking.logEvent('TIL_SKATTEETATEN_SKATTEKORT');
  };

  return (
    <Panel className="flex center vertical textcenter">
      <Normaltekst>
        <Trans i18nKey="NEDREINFOBOKS.CORONA">
          <a href={LENKER.DAGPENGER_FAKTA_PERMITTERT_URL} onClick={event => handleClickSkatteetaten(event)} className="lenke">
            {LENKER.DAGPENGER_FAKTA_PERMITTERT_URL}
          </a>
        </Trans>
      </Normaltekst>
      <Normaltekst>
        <Trans i18nKey="NEDREINFOBOKS.SKATTEKORT">
          <a href={LENKER.SKATT_SKATTEKORT_URL} onClick={event => handleClickSkatteetaten(event)} className="lenke">
            {LENKER.SKATT_SKATTEKORT_URL}
          </a>
        </Trans>
      </Normaltekst>
    </Panel>
  );
};
export default NedreInformasjonsBoks;
