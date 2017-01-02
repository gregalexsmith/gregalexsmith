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
    console.log(formData);
    this.props.submitContactForm(formData);
  }

  render() {
    return (
      <section className="contact-section gs-container">
        <h1>Contact</h1>
        <ContactForm onSubmit={this.handleSubmit} />
      </section>
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
