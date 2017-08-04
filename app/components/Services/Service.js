import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { unit } from '../../utils/constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: 'space-between' : 'space-around';
  align-items: center;
  max-width: 64em;
  margin: 0 auto;
  padding: 0 ${unit / 3}%;
  height: 30%;
`;
const Label = styled.label`
  width: 100%;
  height: 36px;
`;

function Service(props) {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
    </Wrapper>
  );
}

Service.propTypes = {
  label: PropTypes.string,
};

export default Service;
