/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { palette } from '../../utils/constants';

const AppWrapper = styled.div`
  min-height: 100%;
  background-color: ${palette.white}
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - COOD"
          defaultTitle="COOD - студия, делаем сайты и мобильные приложения"
          meta={[
            {
              name: 'description',
              content: 'Делаем крутые сайты, приложения и эффективную рекламу. Помогаем Вашему бизнесу становиться еще успешнее.',
            },
          ]}
        />
        {/* add dark */}
        <Header />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </AppWrapper>
    );
  }
}
