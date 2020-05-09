import React, { useMemo, useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { fromUnixTime, formatRelative } from 'date-fns';

import Input from '../components/Input';
import Button from '../components/Button';

import { Container } from './styles';

interface FormValues {
  timestamp: string;
}

const Home: React.FC = () => {
  const [date, setDate] = useState<string>();

  const initialValues: FormValues = useMemo(
    () => ({
      timestamp: '1588977925',
    }),
    [],
  );

  const handleFormOnSubmit = (values: FormValues): void => {
    const parsedDate = fromUnixTime(+values.timestamp);

    setDate(formatRelative(parsedDate, new Date()));
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleFormOnSubmit}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
        }: FormikProps<FormValues>) => (
          <Form onSubmit={handleSubmit}>
            <Input
              name="timestamp"
              data-testid="timestampInput"
              placeholder="Timestamp"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.timestamp}
            />
            <Button type="submit">Convert</Button>

            {date && (
              <>
                <span>Timestamp date:</span>
                <span>{date}</span>
              </>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Home;
