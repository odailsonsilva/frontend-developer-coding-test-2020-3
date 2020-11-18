import styled from 'styled-components';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 304px;
  height: 420px;

  img {
    width: 100%;
    height: 55%;
  }

  h3 {
    margin-top: 16px;
    font-size: 2rem;
    font-weight: normal;
  }
`;

export const Rating = styled.div`
  margin-top: 8px;
`;

export const Starts = styled(FiStar)`
  width: 2rem;
  height: 2rem;
`;

export const ContainerNameStatus = styled.div`
  font-size: 1.2rem;
  line-height: 1.33rem;
  color: #757575;

  margin-top: 16px;

  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    flex-direction: row;

    & + span {
      &::before {
        content: '';
        background: #00e8a4;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        flex: 1;
        position: relative;
        right: 4px;
      }
    }
  }
`;

export const Button = styled(Link)`
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
  text-align: center;
  background: #002b56;
  border-radius: 2px;
  margin-top: 20px;
  flex: 1;
  padding: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: ${shade(0.25, '#002b56')};
  }
`;
