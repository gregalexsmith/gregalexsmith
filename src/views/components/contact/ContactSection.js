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
    const {completed, success} = this.props.contact
    const result = () => {
      if (success) {
        return "Thanks, I will get back to you soon!";
      } else {
        return "Error sending message. Please try again or use email link.";
      }
    }
    return (
      <div>
        <div className="gs-section-header" id="contact">
          <div className="gs-container">
            <h1>Contact</h1>
          </div>
        </div>
        <section className="contact-section gs-container">
            <p>Please use the contact form below or <a href="mailto:gregalexsmith@gmail.com" target="_top">send me an email.</a> Thanks!</p>
            <ContactForm onSubmit={this.handleSubmit} />
            <p className="contact-result">
              {(completed) ? result() : ""}
            </p>
        </section>
      </div>
    );
  }
}

ContactSection.propTypes = {
  submitContactForm: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

function MapStateToProps(state) {
  return {
    contact: state.contact
  }
}


export default connect(
  MapStateToProps,
  contactActions
)(ContactSection);
