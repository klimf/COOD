/*
 *
 * WorkPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Content from 'components/Content';
import Space from 'components/Space';
import makeSelectWorkPage from './selectors';
import messages from './messages';

export class WorkPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Content>
        <Helmet
          title="WorkPage"
          meta={[
            { name: 'description', content: 'Description of WorkPage' },
          ]}
        />
        <Space size={8} />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </Content>
    );
  }
}

WorkPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  WorkPage: makeSelectWorkPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkPage);
