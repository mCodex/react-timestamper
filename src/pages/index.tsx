import React, { useMemo } from 'react';
import { Formik, Form, FormikProps } from 'formik';

import Input from '../components/Input';
import Button from '../components/Button';

import { Container } from './styles';

interface FormValues {
  timestamp: string;
}

const Home: React.FC = () => {
  const initialValues: FormValues = useMemo(
    () => ({
      timestamp: '',
    }),
    [],
  );

  const handleFormOnSubmit = (values: FormValues): void => {};

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
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Home;
