/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import Helmet from 'react-helmet';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Content from 'components/Content';
import Slide from 'components/Slide';
import Services from 'components/Services';

import { palette, unit } from '../../utils/constants';
import messages from './messages';
import BgShape from './BgShape';
import Card from './Card';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CentredWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  ${(props) => props.noPointer && 'pointer-events: none;'}
`;

const BottomWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Helmet />
        <Slide>
          <CentredWrapper>
            <BgShape />
          </CentredWrapper>
          <CentredWrapper noPointer >
            <Card />
          </CentredWrapper>
          <BottomWrapper>
            <Services />
          </BottomWrapper>
        </Slide>
        <div style={{ display: 'inline-block', backgroundColor: palette.secondary, width: '100%' }}>
          <Content>
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
          </Content>
        </div>
      </Wrapper>
    );
  }
}
