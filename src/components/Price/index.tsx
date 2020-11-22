import React, { useState, useCallback } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Container, ListDrop } from './styles';

const Price: React.FC = () => {
  const [listDrop, setListDrop] = useState(false);

  const handleDrop = useCallback(() => {
    if (listDrop === false) {
      setListDrop(true);
    } else {
      setListDrop(false);
    }
  }, [listDrop]);

  return (
    <Container isDrop={listDrop} onClick={handleDrop}>
      <ul>
        <li>
          Price
          <ListDrop isDrop={listDrop}>
            <li>
              <input type="radio" id="all" name="price" />
              <label htmlFor="all">All</label>
            </li>
            <li>
              <input type="radio" id="op1" name="price" />
              <label htmlFor="op1">$</label>
            </li>
            <li>
              <input type="radio" id="op2" name="price" />
              <label htmlFor="op2">$$</label>
            </li>
            <li>
              <input type="radio" id="op3" name="price" />
              <label htmlFor="op3">$$$</label>
            </li>
            <li>
              <input type="radio" id="op4" name="price" />
              <label htmlFor="op4">$$$$</label>
            </li>
          </ListDrop>
        </li>
      </ul>
      <span>
        <MdKeyboardArrowDown />
      </span>
    </Container>
  );
};

export default Price;
