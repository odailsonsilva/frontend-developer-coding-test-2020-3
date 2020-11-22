import React from 'react';

import { Container } from './styles';

const OpenNow: React.FC = () => {
  return (
    <Container>
      <input type="radio" name="open" id="open" />

      <label htmlFor="open">Open Now</label>
    </Container>
  );
};

export default OpenNow;
