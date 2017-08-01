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
import makeSelectWorkPage from './selectors';
import messages from './messages';

export class WorkPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="WorkPage"
          meta={[
            { name: 'description', content: 'Description of WorkPage' },
          ]}
        />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
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