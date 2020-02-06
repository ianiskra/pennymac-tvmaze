import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Submit from './Submit';

describe('Submit', () => {
  let props;
  let shallowSubmit;
  let renderedSubmit;
  let mountedSubmit;

  const shallowTestComponent = () => {
    if (!shallowSubmit) {
      shallowSubmit = shallow(<Submit {...props} />);
    }
    return shallowSubmit;
  };

  const renderTestComponent = () => {
    if (!renderedSubmit) {
      renderedSubmit = render(<Submit {...props} />);
    }
    return renderedSubmit;
  };

  const mountTestComponent = () => {
    if (!mountedSubmit) {
      mountedSubmit = mount(<Submit {...props} />);
    }
    return mountedSubmit;
  };  

  beforeEach(() => {
    props = {};
    shallowSubmit = undefined;
    renderedSubmit = undefined;
    mountedSubmit = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
