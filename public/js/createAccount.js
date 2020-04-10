/**** Function provided through the Web API
 *
 */
window.onload = function () {
  var form = document.getElementById('createAccountForm');

  /** Load all the required fields on the form into an array.**/
  var createAccountFormRequiredFieldsArray = document.getElementsByClassName(
    'required'
  );

  /*** Retrieve the Email Input Box Object */
  let clientEmailInputBoxObject = createAccountFormRequiredFieldsArray[0];

  /*** Retrieve the User Name Input Box Object */
  let clientUsernameInputBoxObject = createAccountFormRequiredFieldsArray[1];

  /*** Retrieve the Password Input Box Object */
  let clientPasswordInputBoxObject = createAccountFormRequiredFieldsArray[2];

  /*** Add an event listener to the Email Input Box to listen to when the keys are pressed.*/

  form.onsubmit = (event) => {
    checkFields(createAccountFormRequiredFieldsArray);

    clientEmailInputBoxObject.addEventListener('keyup', () => {
      clientEmailInputBoxObject.style.borderColor = 'green';
    });

    /*** Add an event listener to the User Name Input Box to listen to when the keys are pressed.*/
    clientUsernameInputBoxObject.addEventListener('keyup', () => {
      clientUsernameInputBoxObject.style.borderColor = 'green';
    });

    /*** Add an event listener to the Password Input Box to listen to when the keys are pressed.*/
    clientPasswordInputBoxObject.addEventListener('keyup', () => {
      clientPasswordInputBoxObject.style.borderColor = 'green';
    });
  };

  /**
   * @param { Checks if this field is empty after trimming any whitespace characters. Then passes it to the isEmpty() fucntion  } field
   */
  function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
      return true;
    } else return false;
  }

  /**
   * @param { Check if value if is a empty string. } value
   */

  function isEmpty(value) {
    if (value === '') {
      return true;
    } else return false;
  }

  let error = '';
  // ENUM
  const EMAIL_EDGE_CASES = {
    NOAT_NOCOM: 1,
    NO_AT: 2,
    NO_COM: 3,
  };

  this.Object.freeze(EMAIL_EDGE_CASES);

  function constainsNoSpecialCharacters(value) {
    if (!value.includes('@') && !value.includes('.com')) {
      return EMAIL_EDGE_CASES.NOAT_NOCOM;
    } else if (!value.includes('@')) {
      return EMAIL_EDGE_CASES.NO_AT;
    } else if (!value.includes('.com')) {
      return EMAIL_EDGE_CASES.NO_COM;
    }
  }

  function setInvalid(field) {
    field.style.borderColor = 'red';
  }

  /**
   *
   * @param array
   * {This function will iterate through the array populated with the child nodes from the DOM.
   *  It will check each element performing the neccessary logic against the element.}
   */
  function checkFields(array) {
    for (var i = 0; i < array.length; i++) {
      if (checkIfEmpty(array[i])) {
        console.log('Line 37');
        setInvalid(array[i]);
        event.preventDefault();
      }
    }
    switch (constainsNoSpecialCharacters(array[0].value)) {
      case EMAIL_EDGE_CASES.NOAT_NOCOM:
        error = 'Please include the @ character and make to have .com';
        alert(error);
        setInvalid(array[0]);
        event.preventDefault();
        break;

      case EMAIL_EDGE_CASES.NO_AT:
        error = 'Please include the @ character.';
        alert(error);
        setInvalid(array[0]);
        event.preventDefault();
        break;

      case EMAIL_EDGE_CASES.NO_COM:
        error = 'Please include .com in your email';
        alert(error);
        setInvalid(array[0]);
        event.preventDefault();
        break;
    }
  }
};
