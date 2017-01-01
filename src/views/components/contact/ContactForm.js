import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import RenderField from '../common/RenderField';
import { validate, warn } from './validate';

class ContactForm extends React.Component {
  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <form className="auth-form" onSubmit={handleSubmit}>

        <Field name="email"
          type="email"
          label="Email"
          component={RenderField} />

        <Field name="password"
          type="password"
          label="Password"
          component={RenderField} />

      <div>
          <button type="submit"
            disabled={submitting}
            className="button-submit">
            {(this.props.login) ? "Login" : "Sign Up"}
          </button>
        </div>

      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default (reduxForm({
  form: 'contactForm',
  validate,
  warn
})(ContactForm))
