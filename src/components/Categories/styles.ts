import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Check from '../../assets/image/checkd.svg';
import NoCheck from '../../assets/image/no-check.svg';

export const Container = styled.nav<ListDropProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  border-bottom: 1px solid #c8c8c8;
  position: relative;
  padding-bottom: 4px;
  padding-top: 6px;

  cursor: pointer;
  margin-left: 32px;

  > ul {
    list-style: none;
    margin-right: 46px;
    width: 134px;
    li {
      color: #002b56;
      font-size: 1.6rem;
      font-weight: 400;
      position: relative;
    }
  }

  span {
    transition: transform 0.4s ease;

    ${props =>
      props.isDrop &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

interface ListDropProps {
  isDrop: boolean;
}

export const ListDrop = styled.ul<ListDropProps>`
  position: absolute;
  background: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  cursor: pointer;
  transition: opacity 0.8s ease;
  opacity: ${props => (props.isDrop ? 1 : 0)};

  li {
    width: 194px;
    display: ${props => (props.isDrop ? 'flex' : 'none')};

    align-items: center;
    padding: 12px 16px;
    transition: background 0.3s ease;

    input {
      display: none;
      margin-right: 8px;

      & + label::before {
        content: '';
        width: 16px;
        height: 16px;
        background: transparent;
        background-image: url(${NoCheck});
        background-position: 0 -64px;
        vertical-align: middle;
        display: inline-block;
        margin: 0 8px 0 0;
      }

      &:checked + label:before {
        content: '';
        width: 16px;
        height: 16px;
        background: transparent;
        background-image: url(${Check});
        background-position: 0 -64px;
        vertical-align: middle;
        display: inline-block;
        margin: 0 8px 0 0;
      }
    }

    label {
      display: inline-block;
      width: 150px;
      height: 20px;
      cursor: pointer;

      height: 25px;
    }
  }
`;
