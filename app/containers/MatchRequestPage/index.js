/**
 *
 * MatchRequestPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMatchRequestPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class MatchRequestPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>MatchRequestPage</title>
          <meta name="description" content="Description of MatchRequestPage" />
        </Helmet>
      </div>
    );
  }
}

MatchRequestPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  matchRequestPage: makeSelectMatchRequestPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'matchRequestPage', reducer });
const withSaga = injectSaga({ key: 'matchRequestPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MatchRequestPage);
