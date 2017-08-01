import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/style-utils';

const Icon = styled.svg`
  ${media.small`
    display: visible;
  `}
  ${media.medium`
    display:none;
  `}
`;


function MenuIcon() {
  return (
    <Icon width="44px" height="36px" viewBox="0 0 51 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="menu" fill="#31353E">
        <path d="M0,0 L44,0 L44,4.5 L0,4.5 L0,0 Z M0,31.5 L44,31.5 L44,36 L0,36 L0,31.5 Z M0,15.75 L44,15.75 L44,20.25 L0,20.25 L0,15.75 Z" id="menu-icon" />
      </g>
    </Icon>
  );
}

MenuIcon.propTypes = {

};

export default MenuIcon;
