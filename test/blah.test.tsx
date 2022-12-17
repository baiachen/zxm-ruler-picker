import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Demo } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
