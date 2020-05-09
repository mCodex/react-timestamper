import React, { useMemo, useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { fromUnixTime, formatRelative } from 'date-fns';
import { FaClock } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';

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
      <header>
        <FiRepeat size={40} color="#fff" />
        <div>
          <h1>Timestamper</h1>
          <h3>Converts timestamp into date</h3>
        </div>
      </header>

      <Formik initialValues={initialValues} onSubmit={handleFormOnSubmit}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
        }: FormikProps<FormValues>) => (
          <Form onSubmit={handleSubmit}>
            <Input
              icon={FaClock}
              name="timestamp"
              data-testid="timestampInput"
              placeholder="Timestamp"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.timestamp}
            />
            <Button data-testid="submitButton" type="submit">
              Convert
            </Button>

            {date && (
              <>
                <hr />
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
