import React from 'react';
import App from './App';
import { render } from 'react-testing-library'

it('renders without crashing', () => {
  const wrapper = render(<App />)
});
