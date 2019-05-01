import React from 'react';
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Habilidade from '../../../components/Habilidade/Habilidade';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

it('Renders correct', () => {
  const component = mount(<Habilidade />);
  expect(component).toHaveLength(1);
});
