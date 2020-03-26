import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';
import { SamtykkePanel } from '../../Components/Kalkulator/SamtykkePanel';
import Kalkulator from '../../Components/Kalkulator/Kalkulator';

// todo mocke i18next skikkelig opp
jest.mock('../../lib/i18n');

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Skal vise samtykke', () => {
    const wrapper = shallow(<App />);
    const samtykkePanel = wrapper.find(SamtykkePanel);
    const kalkulator = wrapper.find(Kalkulator);
    expect(samtykkePanel).to.have.length(1);
    expect(kalkulator).to.have.length(0);
  });

  it('Skal vise kalkulator etter man har klikket på knappen', () => {
    const wrapper = shallow(<App />);
    const samtykkePanel = wrapper.find(SamtykkePanel);
    const kalkulator = wrapper.find(Kalkulator);
    const samtykkeKnapp = samtykkePanel.dive().find('Hovedknapp');
    expect(samtykkePanel).to.have.length(1);
    expect(kalkulator).to.have.length(0);
    samtykkeKnapp.simulate('click');
    expect(samtykkePanel).to.have.length(1);
    expect(kalkulator).to.have.length(0);
  });
});
