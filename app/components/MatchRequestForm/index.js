/**
 *
 * RegisterForm
 *
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import {
  TextField
} from 'redux-form-material-ui'
import Button from '@material-ui/core/Button';

/* eslint-disable react/prefer-stateless-function */
const MatchRequestForm = props => {
  const { error, handleSubmit, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
      { error && <strong>{error.message}</strong> }
      <Field
        name="id"
        type="text"
        label="Username"
        component={TextField}
      />
      <div>
        <Button type="submit" disabled={submitting}>
          Send Request
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'register'
})(MatchRequestForm)
