/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SubmissionError } from 'redux-form/immutable';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { loadUserStatus } from 'containers/App/actions';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectIsAuthed,
} from 'containers/App/selectors';
import LoginForm from 'components/LoginForm';
import { API_HOSTNAME } from 'utils/constants';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { post } from 'utils/request';
import auth from 'utils/auth';
import reducer from './reducer';
import saga from './saga';
import loginPageReducer from './selectors';
import './styles.css';

const ButtonLink = props => <Link {...props} />;

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  handleSubmit = async bodyMap => {
    const requestURL = `${API_HOSTNAME}session`;
    const body = JSON.stringify(bodyMap.toJS());

    try {
      const { data } = await post(requestURL, body);
      if (!data.auth_token) {
        console.log(data);
        throw 'An error has occurred';
      }
      auth.setToken(data.auth_token, true);
      this.props.onLoadUser();
      this.redirectUser();
    } catch(err) {
      throw new SubmissionError({
        _error: 'Login failed'
      })
    }
  };

  redirectUser = () => {
    this.props.history.push('/');
  };

  render() {
    const { authed } = this.props;

    return (
      <div className="authPage">
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <div className="wrapper">
          <div className="headerContainer">
            <span>Welcome !</span>
          </div>
          <div className="headerDescription">
            { authed && <span>You are already logged in.</span> }
          </div>
          {
            !authed && (
              <div className="formContainer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <LoginForm onSubmit={this.handleSubmit} />
                    </div>
                  </div>
                  <div className="linkContainer">
                    <Button component={ButtonLink} to="/register">Create account</Button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginPage: loginPageReducer(),
  authed: makeSelectIsAuthed(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadUser: evt => dispatch(loadUserStatus())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
