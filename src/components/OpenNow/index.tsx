import React from 'react';

import { Container } from './styles';

const OpenNow: React.FC = () => {
  return (
    <Container>
      <input type="radio" name="open" id="open" />
      <span>Open Now</span>
    </Container>
  );
};

export default OpenNow;
