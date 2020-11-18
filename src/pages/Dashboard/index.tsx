import React from 'react';

import { Container, Hero, ContainerFilters, Content } from './styles';

import Card from '../../components/Cart';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Hero>
        <h1>Restaurants</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          alusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Hero>

      <ContainerFilters />

      <Content>
        <h2>All Restaurants</h2>
        <div>
          <Card />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
