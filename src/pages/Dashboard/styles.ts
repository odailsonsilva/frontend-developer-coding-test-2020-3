import styled from 'styled-components';

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
