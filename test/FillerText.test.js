import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FillerText from '../src/components/FillerText';

describe('<FillerText />', function () {
  const wrapper = shallow(<FillerText />);

  it('should have the right tag', function () {
    expect(wrapper.type()).to.equal('p', (res) => `\`${res[1]}\` is not the right element tag.`);
  });

  it('should have the right content', function () {
    expect(wrapper.text()).to.equal('I am a filler text. I can be used to fill your screen. Amazing!');
  });
});
