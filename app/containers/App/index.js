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

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { palette, unit } from '../../utils/constants';

const AppWrapper = styled.div`
  height: 100%;
  background-color: ${palette.white}
`;

const PageWrapper = styled.div`
  display: inline-block;
  width: 100%;
  min-height: calc(100% - ${23 * unit}px);
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      themeIsDark: this.checkTheme(),
    };
  }
  componentDidUpdate() {
    if (this.state.themeIsDark !== this.checkTheme()) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        themeIsDark: this.checkTheme(),
      });
    }
  }

  checkTheme() {
    const darkPaths = [
      '/work',
      '/about',
    ];
    return darkPaths.some((elem) => (this.props.location.pathname === elem));
  }

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
        <Header dark={this.state.themeIsDark} />
        <PageWrapper>
          {React.Children.toArray(this.props.children)}
        </PageWrapper>
        <Footer dark={this.state.themeIsDark} />
      </AppWrapper>
    );
  }
}
