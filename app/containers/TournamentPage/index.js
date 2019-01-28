/**
 *
 * TournamentPage
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
import makeSelectTournamentPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class TournamentPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>TournamentPage</title>
          <meta name="description" content="Description of TournamentPage" />
        </Helmet>
      </div>
    );
  }
}

TournamentPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tournamentPage: makeSelectTournamentPage(),
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

const withReducer = injectReducer({ key: 'tournamentPage', reducer });
const withSaga = injectSaga({ key: 'tournamentPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TournamentPage);
