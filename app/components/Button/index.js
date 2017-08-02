/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import buttonStyles from './buttonStyles';
import buttonThemes from './buttonThemes';

import { hideOn } from '../../utils/style-utils';

function Button(props) {
  const A = styled.a`${buttonStyles}`;
  const StyledButton = styled.button`${buttonStyles}`;

  const Wrapper = styled.div`
    text-align: center;
  `;

  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }
  return (
    <Wrapper>
      <ThemeProvider theme={props.type ? buttonThemes[props.type] : buttonThemes.primary} >
        {button}
      </ThemeProvider>
    </Wrapper>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default styled(Button)`${hideOn}`;
