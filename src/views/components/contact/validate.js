
function inputEmpty(value) {
  if (!value || value.length < 2) {
    return true;
  }
  return false;
}

export const validate = values => {
  const errors = {};
  console.log("validating");

  // NAME
  if (inputEmpty(values.name)) {
    errors.name = "Required";
  }

  // EMAIL
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // MESSAGE
  if (inputEmpty(values.message)) {
    errors.message = "Required";
  }

  return errors;
};

export const warn = values => {
  const warnings = {}
  return warnings
}
