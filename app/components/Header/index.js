/**
 *
 * Header
 *
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { palette } from '../../utils/constants';

import Wrapper from './Wrapper';
import NavList from './NavList';
import NavItem from './NavItem';
import MenuIcon from './MenuIcon';

import Logo from '../Logo';
import Button from '../Button';

const dark = {
  color: palette.white,
};

const light = {
  color: palette.black,
};

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ThemeProvider theme={this.props.dark ? dark : light}>
        <Wrapper>
          <Link to="/"><Logo /></Link>
          <NavList>
            {messages.navigation.map((item, index) => (
              <NavItem key={index} to={messages.navigation[index].link}><FormattedMessage {...messages.navigation[index]} /></NavItem>
            ))}
          </NavList>
          <Button type="black">Сделать заказ</Button>
          <MenuIcon />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

// Container.propTypes = {
//   theme: {
//     color: PropTypes.string,
//   },
// };

Header.propTypes = {
  dark: PropTypes.bool,
};

export default Header;
