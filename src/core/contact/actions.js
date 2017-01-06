// import {
//   SUBMIT_CONTACT_SUCCESS,
//   SUBMIT_CONTACT_ERROR
// } from './action-types';

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
    fetch('http://localhost:5000/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData)
    })
  };
}
