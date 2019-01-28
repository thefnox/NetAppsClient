/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import { Checkbox, TextField } from 'redux-form-material-ui'
import Button from '@material-ui/core/Button';
const validate = values => {
  const errors = {};
  
  if (!values.get('email')) {
    errors.username = 'Email is required'
  }

  if (!values.get('password')) {
    errors.password = 'Password is required'
  }

  return errors;
}

/* eslint-disable react/prefer-stateless-function */
const LoginForm = props => {
  const { error, handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="email"
        type="email"
        label="Email"
        component={TextField}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        component={TextField}
      />
      <div>
        <Button type="submit" disabled={submitting}>
          Log In
        </Button>
      </div>
      { error && <strong>{error.message}</strong> }
    </form>
  )
}

export default reduxForm({
  validate,
  form: 'login'
})(LoginForm)
