import React from 'react';
import ReactDOM from 'react-dom';
import HW from './HW';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HW />, div);
});
