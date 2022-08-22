

// get input function 
function getInputValue(fieldId) {

    const inputField = document.getElementById(fieldId);
    const fieldValueString = inputField.value;
    const fieldValue = parseInt(fieldValueString);

    //  validation for wrong input
    if (isNaN(fieldValue)) {
        return alert('please provide valid number');
    }
    return fieldValue;
}

//   set value function 
function setElementValue(elementId, value) {
    const expenses = document.getElementById(elementId);
    expenses.innerText = value;

}


