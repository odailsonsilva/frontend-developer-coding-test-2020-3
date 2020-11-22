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
          Categories
          <ListDrop isDrop={listDrop}>
            <li>
              <input type="radio" id="all2" name="categorie" />
              <label htmlFor="all2">All</label>
            </li>
            <li>
              <input type="radio" id="ita" name="categorie" />
              <label htmlFor="ita">Italian</label>
            </li>
            <li>
              <input type="radio" id="sea" name="categorie" />
              <label htmlFor="sea">Seafood</label>
            </li>
            <li>
              <input type="radio" id="steak" name="categorie" />
              <label htmlFor="steak">Steakhouses</label>
            </li>
            <li>
              <input type="radio" id="japa" name="categorie" />
              <label htmlFor="japa">Japanese</label>
            </li>
            <li>
              <input type="radio" id="ame" name="categorie" />
              <label htmlFor="ame">American</label>
            </li>
            <li>
              <input type="radio" id="mex" name="categorie" />
              <label htmlFor="mex">Mexican</label>
            </li>
            <li>
              <input type="radio" id="thai" name="categorie" />
              <label htmlFor="thai">Thai</label>
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
