/**
*
* ShowOn
*
*/

import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';

import { media } from '../../utils/style-utils';

function ShowOn(props) {
  const Element = styled.div`
    ${media.small`
       ${!props.small && 'display: none'};
    `}
    ${media.medium`
       ${!props.medium && 'display: none'};
    `}
    ${media.large`
       ${!props.large && 'display: none'};
    `}
  `;
  return (<Element>{Children.toArray(props.children)}</Element>);
}

ShowOn.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ShowOn;
