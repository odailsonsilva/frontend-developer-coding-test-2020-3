import React from 'react';

import {
  Container,
  Rating,
  Starts,
  ContainerNameStatus,
  Button,
} from './styles';

import RestaurantImg from '../../assets/image/restaurant.jpeg';

const Cart: React.FC = () => {
  return (
    <Container>
      <img src={RestaurantImg} alt="restaurante thai" />
      <h3>Very Long Name Restaurants Number 1 In List</h3>
      <Rating>
        <Starts />
        <Starts />
        <Starts />
        <Starts />
        <Starts />
      </Rating>
      <ContainerNameStatus>
        <span>THAI - $$$$</span>
        <span>Open Now</span>
      </ContainerNameStatus>
      <Button to="teste">LEARN MORE</Button>
    </Container>
  );
};

export default Cart;
