import React from 'react';

import Card from '../../components/Cart';
import OpenNow from '../../components/OpenNow';
import Price from '../../components/Price';
import Categories from '../../components/Categories';

import {
  Container,
  Hero,
  ContainerFilters,
  Content,
  ContainerRestaurants,
  ButtonMore,
} from './styles';

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

      <ContainerFilters>
        <div>
          <span>Filter By:</span>
          <OpenNow />
          <Price />
          <Categories />
        </div>
      </ContainerFilters>

      <Content>
        <h2>All Restaurants</h2>
        <ContainerRestaurants>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ContainerRestaurants>
        <ButtonMore>LOAD MORE</ButtonMore>
      </Content>
    </Container>
  );
};

export default Dashboard;
