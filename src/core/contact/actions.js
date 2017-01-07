import {reset} from 'redux-form';
import {
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_ERROR
} from './action-types';

export function submitContactForm(formData) {
  return function(dispatch) {
    console.log("action data", formData);
    //Format Form Data for API
    var from = formData.name + "<" + formData.email + ">";
    var sendData = {
      "data": {
        from: from,
        text: formData.message
      }
    };
    fetch('/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData)
    }).then(function(response) {
      return response.json()
    }).then(function(json) {
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
