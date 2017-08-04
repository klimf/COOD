/**
*
* Services
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { palette } from '../../utils/constants';
import { hideOn } from '../../utils/style-utils';

import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.expand ? 'space-between' : 'space-around'};
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 36px;
  ${(props) => !props.expand && 'max-width: 400px;'}
  ${hideOn}
`;


function Services() {
  return (
    <Wrapper>
      {messages.navigation.map((item, index) => (
        <Service key={index} to={messages.navigation[index].link}><FormattedMessage {...messages.navigation[index]} /></Service>
      ))}
    </Wrapper>
  );
}

Services.propTypes = {

};

export default Services;
