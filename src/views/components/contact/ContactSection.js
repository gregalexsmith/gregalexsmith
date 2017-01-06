import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { contactActions } from '../../../core/contact';
import ContactForm from './ContactForm';
import './contact-styles.css';


class ContactSection extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    this.props.submitContactForm(formData);
  }

  render() {
    return (
      <div>
        <div className="gs-section-header" id="contact">
          <div className="gs-container">
            <h1>Contact</h1>
          </div>
        </div>
        <section className="contact-section">
            <p>Please use the contact form below or <a href="email greg">this link</a> to send me an email. Thanks!</p>
            <ContactForm onSubmit={this.handleSubmit} />
        </section>
      </div>
    );
  }
}

ContactSection.propTypes = {
  submitContactForm: PropTypes.func.isRequired
};

export default connect(
  null,
  contactActions
)(ContactSection);
