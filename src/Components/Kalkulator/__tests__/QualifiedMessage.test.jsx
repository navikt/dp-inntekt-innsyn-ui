import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import QualifiedMessage from '../QualifiedMessage';
import PositiveResponse from '../PositiveResponse';
import NegativeResponse from '../NegativeResponse';

describe('QualifiedMessage', () => {
  it('Skal vise positiv tilbakemelding', () => {
    const props = {
      isOppfyllerInntekstkrav: true,
      ukesats: 400,
      periodeAntallUker: 13,
    };

    const wrapper = shallow(<QualifiedMessage {...props} />);
    const positive = wrapper.find(PositiveResponse);
    const negative = wrapper.find(NegativeResponse);
    expect(positive).has.length(1);
    expect(negative).has.length(0);
  });

  it('Skal vise negativ tilbakemelding', () => {
    const props = {
      isOppfyllerInntekstkrav: false,
      ukesats: 400,
      periodeAntallUker: 13,
    };

    const wrapper = shallow(<QualifiedMessage {...props} />);
    const positive = wrapper.find(PositiveResponse);
    const negative = wrapper.find(NegativeResponse);
    expect(positive).has.length(0);
    expect(negative).has.length(1);
  });
});
