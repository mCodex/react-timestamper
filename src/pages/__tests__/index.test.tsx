import React from 'react';
import { render } from '@testing-library/react';

import App from '..';

describe('Home', () => {
  it('should label be rendered', () => {
    const { getByText } = render(<App />);
    const labelElement = getByText(/Timestamp:/i);
    expect(labelElement).toBeInTheDocument();
  });
});
