
function inputEmpty(value) {
  if (!value || value.length < 2) {
    return true;
  }
  return false;
}

export const validate = values => {
  const errors = {};
  console.log("validating");

  // EMAIL
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // PASSWORD
  if (inputEmpty(values.password)) {
    errors.password = "Please enter a password";
  }

  return errors;
};

export const warn = values => {
  const warnings = {}
  return warnings
}
