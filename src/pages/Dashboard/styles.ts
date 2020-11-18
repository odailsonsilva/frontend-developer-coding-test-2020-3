import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export const Hero = styled.header`
  width: 55%;
  margin: 16px 64px 36px;

  h1 {
    font-size: 5.4rem;
    font-weight: 300;
    color: #333333;
    line-height: 1.19;
    letter-spacing: 0.96px;
    margin-bottom: 24px;
  }

  p {
    font-size: 2.2rem;
    font-weight: 300;
  }
`;

export const ContainerFilters = styled.div`
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  height: 70px;
  width: 100%;
  margin-bottom: 64px;

  display: flex;
  align-items: center;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 64px;

  span {
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: #606060;
  }

  div {
    margin: 0 32px;
  }
`;

export const Content = styled.main`
  margin: 16px 64px 36px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 3.4rem;
    font-weight: 300;
    margin-bottom: 42px;
  }
`;

export const ContainerRestaurants = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 80px;

  div {
    margin-right: 32px;
  }
`;

export const ButtonMore = styled.button`
  width: 416px;
  height: 48px;
  margin: 80px auto;
  border-radius: 2px;
  border: solid 1px #002b56;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  color: #002b53;
  background: #fff;
  transition: background 0.3s ease;

  cursor: pointer;

  &:hover {
    background: ${shade(0.1, '#fff')};
  }
`;
