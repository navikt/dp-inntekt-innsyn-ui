import React, { useEffect, useState } from 'react';
import LoadingMessage from '../LoadingMessage';
import { getBehov } from '../../Api';
import QualifiedMessage from './QualifiedMessage';
import tracking from '../../lib/tracking';

export const Kalkulator = () => {
  const [isLoading, setLoading] = useState(true);
  const [isOppfyllerInntekstkrav, setOppfyllerInntekstkrav] = useState(false);
  const [periodeAntallUker, setPeriodeAntallUker] = useState(0);
  const [ukesats, setUkesats] = useState(0);
  const [regelBrukt, setRegelBrukt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data = {} } = await getBehov();
        if (data) {
          const { oppfyllerMinsteinntekt, periodeAntallUker: uker, ukesats: sats, regelBrukt: regel } = data;
          setOppfyllerInntekstkrav(oppfyllerMinsteinntekt);
          setPeriodeAntallUker(uker);
          setUkesats(sats);
          setRegelBrukt(regel);
          setLoading(false);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingMessage type="XL" />;
  }

  tracking.logEvent('RESULTAT', {
    isOppfyllerInntekstkrav,
    ukesats,
  });


  return <QualifiedMessage isOppfyllerInntekstkrav={isOppfyllerInntekstkrav} ukesats={ukesats} periodeAntallUker={periodeAntallUker} />;
};

export default Kalkulator;
