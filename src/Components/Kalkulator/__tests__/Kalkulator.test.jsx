import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Kalkulator } from '../Kalkulator';
import LoadingMessage from '../../LoadingMessage';

describe('Kalkulator', () => {
  it('Skal vise laster siden', () => {
    const wrapper = shallow(<Kalkulator />);
    const loadingMessage = wrapper.find(LoadingMessage);
    expect(loadingMessage).to.have.length(1);
  });
});
