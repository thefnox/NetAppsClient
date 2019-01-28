/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { SubmissionError } from 'redux-form/immutable';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import RegisterForm from 'components/RegisterForm';
import { API_HOSTNAME } from 'utils/constants';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectIsAuthed,
} from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { post } from 'utils/request';
import auth from 'utils/auth';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.css';

const ButtonLink = props => <Link {...props} />;

/* eslint-disable react/prefer-stateless-function */
export class RegisterPage extends React.Component {

  handleSubmit = async bodyMap => {
    const requestURL = `${API_HOSTNAME}players`;
    const body = JSON.stringify(bodyMap.toJS());

    try {
      await post(requestURL, body);
      this.redirectUser();
    } catch(err) {
      throw new SubmissionError({
        _error: 'Register failed'
      })
    }
  };

  redirectUser = () => {
    this.props.history.push('/login');
  };

  render() {
    const { authed } = this.props;

    return (
      <div className="authPage">
        <Helmet>
          <title>RegisterPage</title>
          <meta name="description" content="Description of Register Page" />
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
                      <RegisterForm onSubmit={this.handleSubmit} />
                    </div>
                  </div>
                  <div className="linkContainer">
                    <Button component={ButtonLink} to="/login">Back to Login</Button>
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

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
  authed: makeSelectIsAuthed(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage);
