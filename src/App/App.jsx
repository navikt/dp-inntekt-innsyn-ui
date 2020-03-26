import React, { useState } from 'react';
import { init } from '@sentry/browser';
import { useTranslation } from 'react-i18next';
import AlertStripe from 'nav-frontend-alertstriper';
import Header from '../Components/Header';
import BackButton from '../Components/BackButton';
import SamtykkePanel from '../Components/Kalkulator/SamtykkePanel';
import Spacer from '../Components/Spacer';
import Kalkulator from '../Components/Kalkulator/Kalkulator';
import ErrorBoundary from '../Components/ErrorBoundary';
import { instance } from '../Api';
import tracking from '../lib/tracking';
import './App.css';
import NedreInformasjonsBoks from "../Components/NedreInformajonsBoks/NedreInformasjonsBoks";

// sentry
const environment = window.location.hostname;
init({
  dsn: 'https://26768d0f8af64d66901466f17b51d1fe@sentry.gc.nav.no/22',
  environment,
});

export const App = () => {
  const { t } = useTranslation();

  const [isSamtykke, setSamtykke] = useState(false);
  const [errors, setError] = useState({ hasError: false, status: null, statusText: null });
  // axios apply interceptor on response
  instance.interceptors.response.use(response => response, error => setError({ hasError: true, ...error }));

  tracking.logEvent('ANKOMMER_FORSIDEN', {
    environment,
  });

  const handleSetSamtykke = () => {
    tracking.logEvent('GITT_SAMTYKKE');
    setSamtykke(true);
  };

  const hasSamtykke = window.location.search === '?samtykke=true';

  return (
    <div className="App">
      <Header />
      <div className="content">
        <AlertStripe type="advarsel">{t('APP.CORONA_INFO')}</AlertStripe>
        <Spacer twentyPx />
        <ErrorBoundary apiErrors={errors}>{isSamtykke || hasSamtykke ? <Kalkulator /> : <SamtykkePanel onClickCallback={handleSetSamtykke} />}</ErrorBoundary>
        <Spacer twentyPx />
        <NedreInformasjonsBoks/>
        <Spacer twentyPx />
        <BackButton />
        <Spacer twentyPx />
      </div>
    </div>
  );
};

export default App;
