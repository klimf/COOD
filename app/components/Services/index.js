/**
*
* Services
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { unit } from '../../utils/constants';

import messages from './messages';
import Service from './Service';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 0 ${unit / 3}% ${2.5 * unit}px;
`;


function Services(props) {
  return (
    <Wrapper>
      {messages.services.map((item, index) => (
        <Service dark={props.dark} key={index} icon={messages.services[index].icon}><FormattedMessage {...messages.services[index]} /></Service>
      ))}
    </Wrapper>
  );
}

Services.propTypes = {
  dark: PropTypes.bool,
};

export default Services;
