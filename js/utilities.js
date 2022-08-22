

   // get input function 
   function getInputValue(fieldId){

    const inputField = document.getElementById(fieldId);
    const fieldValueString  = inputField.value;
    const fieldValue = parseInt(fieldValueString);
    return fieldValue;
}

//   set value function 
function setElementValue(elementId,value){
  const expenses =  document.getElementById(elementId);
  expenses.innerText=value;

}