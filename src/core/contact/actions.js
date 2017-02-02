import {reset} from 'redux-form';
import {
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_ERROR
} from './action-types';

// handle submit of email contact form
// this react app is hosted on a simple node server that has a '/contact' endpoint for sending the email using mailgun
export function submitContactForm(formData) {
  return function(dispatch) {
    //Format Form Data for API
    var from = formData.name + "<" + formData.email + ">";
    var sendData = {
      "data": {
        from: from,
        text: formData.message
      }
    };

    // post the data to the contact endpoint
    fetch('/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData)
    }).then(function(response) {
      // convert to json
      return response.json()
    }).then(function(json) {
      // process the response from the server
      console.log('api response', json)
      if (json.success) {
        dispatch({ type: SUBMIT_CONTACT_SUCCESS });
        dispatch(reset('contactForm'));
      } else {
        dispatch({ type: SUBMIT_CONTACT_ERROR })
      }
    }).catch(function(error) {
      dispatch({ type: SUBMIT_CONTACT_ERROR })
    })
  };
}
