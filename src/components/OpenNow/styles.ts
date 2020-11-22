import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  border-bottom: 1px solid #c8c8c8;
  position: relative;
  padding-bottom: 4px;
  padding-top: 6px;

  cursor: pointer;

  input {
    margin-right: 8px;
  }

  > span {
    color: #002b56;
    font-weight: 400;
  }
`;
