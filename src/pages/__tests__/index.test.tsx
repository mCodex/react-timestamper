import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';

import App from '..';

describe('Home', () => {
  it('should timestamp input be rendered', () => {
    const { getByTestId } = render(<App />);
    const timestampInput = getByTestId('timestampInput');

    expect(timestampInput).toBeTruthy();
  });

  it('should be able to change input value', async () => {
    const { findByTestId } = render(<App />);

    const timestampInput = (await findByTestId(
      'timestampInput',
    )) as HTMLInputElement;

    const timestampValue = '1589034062';

    act(() => {
      fireEvent.change(timestampInput, {
        target: { value: timestampValue },
      });
    });

    await waitFor(() => {
      expect(timestampInput.value).toBe(timestampValue);
    });
  });

  it('should be able to submit form', async () => {
    const { findByTestId } = render(<App />);

    const timestampInput = await findByTestId('timestampInput');

    const timestampValue = '1589034062';

    act(() => {
      fireEvent.change(timestampInput, {
        target: { value: timestampValue },
      });
    });

    const submitButton = await findByTestId('submitButton');

    act(() => {
      fireEvent.submit(submitButton);
    });

    const convertedDate = await (
      await findByTestId('convertedDate')
    ).textContent;

    await waitFor(() => {
      expect(convertedDate).toBe('05/09/2020 11:21:02 AM');
    });
  });
});
