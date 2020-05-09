import React from 'react';
import {
  render,
  fireEvent,
  act,
  waitForElement,
  wait,
} from '@testing-library/react';

import App from '..';

describe('Home', () => {
  it('should timestamp input be rendered', () => {
    const { getByTestId } = render(<App />);
    const timestampInput = getByTestId('timestampInput');

    expect(timestampInput).toBeInTheDocument();
  });

  it('should be able to change input value', async () => {
    const { getByTestId } = render(<App />);

    const timestampInput = await waitForElement(() =>
      getByTestId('timestampInput'),
    );

    const timestampValue = '1589034062';

    act(() => {
      fireEvent.change(timestampInput, {
        target: { value: timestampValue },
      });
    });

    wait(() => {
      expect(timestampInput.value).toBe(timestampValue);
    });
  });
});
