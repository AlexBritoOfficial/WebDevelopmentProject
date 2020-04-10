/**** Lab 6 Code */
window.onload = function () {
  /** Retrieve the main form object by derefrencing its id value.**/

  var mainFormObject = document.getElementById('mainForm');

  /** Load all the required fields on the form into an array.**/

  var mainFormRequiredFieldsArray = document.getElementsByClassName('required');

  /** This variable will hold the required "Title" input object.**/

  var userTitleObject = mainFormRequiredFieldsArray[0];

  /** This variable will hold the required "Description" input object.**/

  var userDescriptionObject = mainFormRequiredFieldsArray[1];

  /** This variable will hold the required ""Acceptance" checkbox object.**/

  var userAcceptanceCheckBoxObject = mainFormRequiredFieldsArray[2];

  /** This variable will hold the value of the "title" input field.**/

  var userTitleObjectValue = null;

  /** This variable will hold the value for the "description" input field.**/

  var userDescriptionObjectValue = null;

  /** This variable will hold the boolean value for the Acceptance Check Box **/

  var userAcceptanceCheckBoxObjectValue = null;

  /** This variable will hold userTitleObjectValue parent node.**/

  var userTitleParentNode = userTitleObject.parentNode;

  /** This variable will hold userDescriptionObjectValue parent node.**/
  var userDescriptionParentNode = userDescriptionObject.parentNode;

  /** This variable will hold the userAcceptanceCheckBoxObject parent node.**/

  var userAcceptanceCheckBoxObjectParentNode =
    userAcceptanceCheckBoxObject.parentNode;

  /**
   * Set a "onsubmit" function to the mainForm object.
   **/

  mainFormObject.onsubmit = function (e) {
    console.log('User Acceptance ID Value: ' + userAcceptanceCheckBoxObject.id);
    /*** DEBUGGING **/
    // console.log("User Title Value: " + userTitleObjectValue);
    // console.log("User Title Value: " + userTitleObjectValue.length);
    // console.log("User Description Value: " + userDescriptionObjectValue);
    // console.log("CheckBox Checked Value: " + userAcceptanceCheckBoxObjectValue);

    /**
     * Check if the main forms required fields are null.
     * If "yes" the object and its parent node will have a backgroundColor set equal to "red".
     * */
    // checkTitleValue(userTitleObject);
    // checkDescriptionValue(userDescriptionObject);
    checkInputTextFields(mainFormRequiredFieldsArray);
    // checkAcceptanceCheckBox(userAcceptanceCheckBoxObject);
  };

  /**
   * Initialize the onreset() function on the mainForm object
   * This will clear the fornm when the user clicks on the "Clear Form" button.
   **/
  mainFormObject.onreset = function (e) {
    clearAllHighlightedFieldsOnReset(mainFormRequiredFieldsArray);
  };

  /**
   * @param { Responsible for the validation of the title input value. } titleObject
   * This function could be optimized. Createone function that checks the id and the objects state
   * to see if its null or "". I kept the function here to show you what I initially had wrtitten.
   */
  function checkTitleValue(titleObject) {
    if (checkIfEmpty(titleObject)) {
      setInvalid(
        titleObject,
        `${titleObject.id} box field must not be empty!!!`
      );
      event.preventDefault();
      return true;
    } else return false;
  }

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

  /**
   * @param { Responsible for the validation of the description input value. } descriptionObject
   *
   * This function could be optimized. Createone function that checks the id and the objects state
   * to see if its null or "". I kept the function here to show you what I initially had wrtitten.
   */
  function checkDescriptionValue(descriptionObject) {
    if (checkIfEmpty(descriptionObject)) {
      // setInvalid(descriptionObject, `${descriptionObject.id} box field must not be empty!!!`);
      event.preventDefault();
      return true;
    } else return false;
  }

  /**
   * @param descriptionObject
   * { Responsible for the validation of the checkBox acceptance field  }
   */

  function checkAcceptanceCheckBox(userAcceptanceObject) {
    if (isUnChecked(userAcceptanceObject)) {
      event.preventDefault();
      return true;
    } else return false;
  }

  function isUnChecked(field) {
    // console.log("Inside the isUnchecked() fucntion. Value of field is checked. " + field.value.checked);
    if (field.checked == false) {
      return true;
    } else return false;
  }

  function setInvalid(field, message) {
    field.parentNode.style.backgroundColor = 'red';
    field.style.backgroundColor = 'red';
    alert(message);
  }

  /***
   * Set a event listeners to all the required fields.
   * This will serve the purpose for picking up any changes,
   * when the user changes the values of the input boxes or checkbox.
   */
  userTitleObject.addEventListener('keyup', function () {
    userTitleObjectValue = userTitleObject.value;

    /***
     * DEBUG
     */
    // console.log("Title: " + userTitleObjectValue);
    userTitleParentNode.style.backgroundColor = 'white';
    userTitleObject.style.backgroundColor = 'white';
  });

  userDescriptionObject.addEventListener('keyup', function () {
    userDescriptionObjectValue = userDescriptionObject.value;
    /***
     * DEBUG
     */
    // console.log("Description: " + userDescriptionObjectValue);
    userDescriptionParentNode.style.backgroundColor = 'white';
    userDescriptionObject.style.backgroundColor = 'white';
  });

  userAcceptanceCheckBoxObject.addEventListener('change', (e) => {
    /***
     * DEBUG
     */
    // console.log("Checkbox value: " + userAcceptanceCheckBoxObject.checked);
    if (e.target.checked == true) {
      userAcceptanceCheckBoxObjectParentNode.style.backgroundColor = 'white';
      userAcceptanceCheckBoxObject.style.backgroundColor = 'white';
    }
  });

  function clearAllHighlightedFieldsOnReset(objectArray) {
    for (var i = 0; i < objectArray.length; i++) {
      objectArray[i].parentNode.style.backgroundColor = 'white';
      objectArray[i].style.backgroundColor = 'white';
    }
  }

  /**
   *
   * @param objectArray
   * {This function will iterate through the array populated with the child nodes from the DOM.
   *  It will check each element performing the neccessary logic against the element.}
   */

  function checkInputTextFields(objectArray) {
    for (var i = 0; i < objectArray.length; i++) {
      if (checkIfEmpty(objectArray[i])) {
        setInvalid(objectArray[i], `${objectArray[i].id} must be checked!!!`);
        event.preventDefault();
      }
    }
  }
};
