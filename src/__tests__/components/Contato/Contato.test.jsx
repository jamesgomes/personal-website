import React from 'react';
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contato from '../../../components/Contato/Contato';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

it('renders without crashing', () => {
  const component = mount(<Contato />);
  expect(component).toHaveLength(1);
});
