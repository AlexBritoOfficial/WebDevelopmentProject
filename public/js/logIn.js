window.onload = function () {
  /***Load in Sign In Form */
  var form = document.getElementById('signInForm');

  /** Load all the required fields on the form into an array.**/
  var signInFormRequiredFieldsArray = document.getElementsByClassName(
    'required'
  );

  /*** Retrieve the Email Input Box Object */
  let clientEmailInputBoxObject = signInFormRequiredFieldsArray[0];

  /*** Retrieve the User Name Input Box Object */
  let clientPasswordInputBoxObject = signInFormRequiredFieldsArray[1];

  form.onsubmit = (event) => {
    checkFields(signInFormRequiredFieldsArray);
    specialCharactersValidation(signInFormRequiredFieldsArray);

    /*** Add an event listener to the Email Input Box to listen to when the keys are pressed.*/
    clientEmailInputBoxObject.addEventListener('keyup', () => {
      clientEmailInputBoxObject.style.borderColor = 'green';
    });

    /*** Add an event listener to the User Name Input Box to listen to when the keys are pressed.*/
    clientPasswordInputBoxObject.addEventListener('keyup', () => {
      clientPasswordInputBoxObject.style.borderColor = 'green';
    });
  };

  /**
   * @param { Checks if this field is empty after trimming any whitespace characters. Then passes it to the isEmpty() fucntion  } field
   */
  function checkIfEmpty(field) {
    console.log(field.value);
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

  /*** Enum Class for EMAIL EDGE Cases */
  const EMAIL_EDGE_CASES = {
    NOAT_NOCOM: 1,
    NO_AT: 2,
    NO_COM: 3,
  };

  this.Object.freeze(EMAIL_EDGE_CASES);

  /** This will be responsible to check for special characters
   */
  function constainsNoSpecialCharacters(value) {
    if (!value.includes('@') && !value.includes('.com')) {
      return EMAIL_EDGE_CASES.NOAT_NOCOM;
    } else if (!value.includes('@')) {
      return EMAIL_EDGE_CASES.NO_AT;
    } else if (!value.includes('.com')) {
      return EMAIL_EDGE_CASES.NO_COM;
    }
  }

  /***Function to set input text object border color red */
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
  }

  function specialCharactersValidation(array) {
    let error = 'Please enter a valid email address.';
    switch (constainsNoSpecialCharacters(array[0].value)) {
      case EMAIL_EDGE_CASES.NOAT_NOCOM:
        alert(error);
        setInvalid(array[0]);
        event.preventDefault();
        break;

      case EMAIL_EDGE_CASES.NO_AT:
        alert(error);
        setInvalid(array[0]);
        event.preventDefault();
        break;

      case EMAIL_EDGE_CASES.NO_COM:
        alert(error);
        setInvalid(array[0]);
        event.preventDefault();
        break;
    }
  }
};
