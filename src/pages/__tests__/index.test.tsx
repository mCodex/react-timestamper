import React from 'react';
import {
  render,
  fireEvent,
  act,
  waitForElement,
  waitFor,
} from '@testing-library/react';

import App from '..';

describe('Home', () => {
  it('should timestamp input be rendered', () => {
    const { getByTestId } = render(<App />);
    const timestampInput = getByTestId('timestampInput');

    expect(timestampInput).toBeInTheDocument();
  });

  it('should be able to change input value', async () => {
    const {  findByTestId } = render(<App />);

    const timestampInput = (await findByTestId(
      'timestampInput',
    )) as HTMLInputElement;

    const timestampValue = '1589034062';

    act(() => {
      fireEvent.change(timestampInput, {
        target: { value: timestampValue },
      });
    });

    waitFor(() => {
      expect(timestampInput.value).toBe(timestampValue);
    });
  });

  it('should be able to submit form', async () => {
    const { getByTestId, findByTestId } = render(<App />);

    const timestampInput = await findByTestId('timestampInput');


    const timestampValue = '1589034062';

    act(() => {
      fireEvent.change(timestampInput, {
        target: { value: timestampValue },
      });
    });

    const submitButton = await findByTestId('submitButton')

    act(() => {
      fireEvent.submit(submitButton);
    });

    waitFor(() => {
      expect(submitButton).toHaveBeenCalledTimes(1);
    });
  });
});
