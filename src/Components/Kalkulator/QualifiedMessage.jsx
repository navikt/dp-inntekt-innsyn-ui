import Panel from 'nav-frontend-paneler';
import React from 'react';
import PropTypes from 'prop-types';
import PositiveResponse from './PositiveResponse';
import NegativeResponse from './NegativeResponse';

export const QualifiedMessage = ({ isOppfyllerInntekstkrav, ukesats, periodeAntallUker }) => (
  <Panel className="panelblue">
    <div className="padding16">
      {isOppfyllerInntekstkrav ? <PositiveResponse ukesats={ukesats} periodeAntallUker={periodeAntallUker} /> : <NegativeResponse />}
    </div>
  </Panel>
);

QualifiedMessage.propTypes = {
  isOppfyllerInntekstkrav: PropTypes.bool.isRequired,
  ukesats: PropTypes.number,
  periodeAntallUker: PropTypes.number,
};

QualifiedMessage.defaultProps = {
  ukesats: undefined,
  periodeAntallUker: undefined,
};

export default QualifiedMessage;
