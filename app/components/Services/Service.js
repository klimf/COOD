import React, { PropTypes, Children } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { palette, unit } from '../../utils/constants';
import LaptopIcon from './LaptopIcon';
import MobileIcon from './MobileIcon';
import ChartIcon from './ChartIcon';
import IdeaIcon from './IdeaIcon';

const Wrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: ${1.5 * unit}px;
  font-weight: 300;
`;

const iconThemes = {
  light: {
    main: palette.black,
    accent: palette.primary,
    bg: palette.secondary,
  },
  dark: {
    main: palette.white,
    accent: '#76BCEF',
    bg: palette.dark,
  },
};

function getIcon(name, theme) {
  switch (name) {
    case 'LaptopIcon':
      return <LaptopIcon theme={theme} />;
    case 'PhoneIcon':
      return <MobileIcon theme={theme} />;
    case 'ChartIcon':
      return <ChartIcon theme={theme} />;
    case 'IdeaIcon':
      return <IdeaIcon theme={theme} />;
    default:
      return <LaptopIcon theme={theme} />;
  }
}

function Service(props) {
  return (
    <Wrapper>
      {getIcon(props.icon, props.dark ? iconThemes.dark : iconThemes.light)}
      <br />
      {Children.toArray(props.children)}
    </Wrapper>
  );
}

Service.propTypes = {
  dark: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Service;
