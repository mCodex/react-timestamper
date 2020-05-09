import React from 'react';

import Input from '../components/Input';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Input data-testid="1" placeholder="Timestamp" />
    </Container>
  );
};

export default Home;
