import {reset} from 'redux-form';
import {
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_ERROR
} from './action-types';

const endpoint = 'https://us-central1-gregalexsmith-d7fc3.cloudfunctions.net/api'

// handle submit of email contact form
export function submitContactForm(formData) {
  return function(dispatch) {
    const postData = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    fetch(endpoint + '/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(checkStatus)
    .then(() => {
      dispatch({ type: SUBMIT_CONTACT_SUCCESS });
      dispatch(reset('contactForm'));
    })
    .catch(function(error) {
      console.log(error);
      dispatch({ type: SUBMIT_CONTACT_ERROR })
    })
  };
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}