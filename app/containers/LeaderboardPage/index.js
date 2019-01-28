/**
 *
 * LeaderboardPage
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
import makeSelectLeaderboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class LeaderboardPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>LeaderboardPage</title>
          <meta name="description" content="Description of LeaderboardPage" />
        </Helmet>
      </div>
    );
  }
}

LeaderboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  leaderboardPage: makeSelectLeaderboardPage(),
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

const withReducer = injectReducer({ key: 'leaderboardPage', reducer });
const withSaga = injectSaga({ key: 'leaderboardPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LeaderboardPage);
