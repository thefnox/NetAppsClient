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
import MatchRequestForm from 'components/MatchRequestForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { API_HOSTNAME } from 'utils/constants';
import { get } from 'utils/request';
import makeSelectMatchRequestPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class MatchRequestPage extends React.Component {
  handleSubmit = async bodyMap => {
    const body = bodyMap.toJS();
    const requestURL = `${API_HOSTNAME}games/request/${body.id}`;
    try {
      await get(requestURL);
      this.redirectUser();
    } catch(err) {
      throw new SubmissionError({
        _error: 'Request failed'
      })
    }
  };

  redirectUser = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="authPage">
        <Helmet>
          <title>MatchRequestPage</title>
          <meta name="description" content="Description of MatchRequestPage" />
        </Helmet>
        <div className="wrapper">
          <h1>Request match</h1>
          <div className="formContainer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <MatchRequestForm onSubmit={this.handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
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
