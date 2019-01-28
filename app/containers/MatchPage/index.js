/**
 *
 * MatchPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button } from '@material-ui/core';
import { API_HOSTNAME } from 'utils/constants';
import { loadUserStatus, startEventPolling } from 'containers/App/actions';
import { post } from 'utils/request';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUserData } from 'containers/App/selectors';
import makeSelectMatchPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class MatchPage extends React.Component {
  handleClick = async () => {
    const { match, startPolling, onLoadUser } = this.props;
    const { matchId } = match.params;
    if (matchId) {
      post(`${API_HOSTNAME}games/${matchId}`);
    }
    startPolling();
    onLoadUser();
    this.redirectUser();
  };

  redirectUser = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>MatchPage</title>
          <meta name="description" content="Description of MatchPage" />
        </Helmet>
        <Button onClick={this.handleClick} className="loseButton">
          Press to lose
        </Button>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  matchPage: makeSelectMatchPage(),
  userData: makeSelectUserData(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadUser: evt => dispatch(loadUserStatus()),
    startPolling: evt => dispatch(startEventPolling()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'matchPage', reducer });
const withSaga = injectSaga({ key: 'matchPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MatchPage);
