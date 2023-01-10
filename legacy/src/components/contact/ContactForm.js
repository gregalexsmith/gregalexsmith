import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import RenderField from '../common/RenderField';
import { validate, warn } from './validate';

class ContactForm extends Component {
  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name"
          type="text"
          id="contactForm-name"
          label="Name"
          component={RenderField} />
        <Field name="email"
          type="email"
          id="contactForm-email"
          label="Email"
          component={RenderField} />
        <Field name="message"
          type="textarea"
          id="contactForm-message"
          label="Message"
          component={RenderField} />
      <div>
          <button type="submit"
            disabled={submitting}
            className="button-submit">
            Send
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
