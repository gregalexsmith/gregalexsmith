import React, { Component, PropTypes } from 'react';

const errorStyles = {
  padding: "4px 2px",
  color: "#f77"
}

const iconStyles = {
  margin: "0 6px"
}

class RenderField extends Component {
  render() {
    const {input, placeholder, label, type, disabled, money, meta:{ touched, warning, error }} = this.props
    function renderError() {
      if (touched && error) {
        return (
          <div style={errorStyles}>
            <i
              className="fa fa-exclamation-circle"
              style={iconStyles}/>
            <span>{error}</span>
          </div>
        );
      } else if (touched && warning) {
        return (
          <div style={errorStyles}>
            <span>{warning}</span>
          </div>
        );
      }
    }

    function renderInput() {
      if (type === "textarea") {
        return (
          <textarea {...input}
            placeholder={placeholder}
            rows={10}/>
        )
      } else {
        return (
          <input {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={(money) ? "input-money" : ""}/>
        )
      }
    }

    return (
      <div>
        <label htmlFor={input.name}>{label}</label>
        {renderInput()}
        {renderError()}
      </div>
    )
  }
}

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  money: PropTypes.bool,
  meta: PropTypes.object
};

export default RenderField;
