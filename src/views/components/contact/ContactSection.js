import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { contactActions } from '../../../core/contact';
import ContactForm from './ContactForm';
// import './styles.css';


class ContactSection extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    console.log("ya");
    this.props.submitContactForm(formData);
  }

  render() {
    return (
      <div className="auth-page">
        <h1>Contact</h1>
        <ContactForm onSubmit={this.handleSubmit} />
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
