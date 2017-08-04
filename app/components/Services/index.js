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
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 0 ${unit / 3}% ${2.5 * unit}px;
  height: 100%;
`;


function Services() {
  // console.log(messages.services[0].icon);
  return (
    <Wrapper>
      {messages.services.map((item, index) => (
        <Service key={index} icon={messages.services[index].icon}><FormattedMessage {...messages.services[index]} /></Service>
      ))}
    </Wrapper>
  );
}

Services.propTypes = {

};

export default Services;
