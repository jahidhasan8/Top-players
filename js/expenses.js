
// set event handler on calculate button 
document.getElementById('btn-calculate').addEventListener('click', function () {

    const playerNumberElement = document.getElementById('total-added-player');
    const chosenPlayerNumber = playerNumberElement.innerText;

    //  calculate player expenses
    const playerExpenses = getInputValue('player-expenses-field')
    const totalPlayerExpenses = playerExpenses * chosenPlayerNumber;
      
    // validation 
    if(Number.isNaN(totalPlayerExpenses)){
        return 
    }

    setElementValue('player-total-expenses', totalPlayerExpenses);
})


//   set event handler on total calculate button
document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playerExpensesField = document.getElementById('player-total-expenses');
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseInt(playerExpensesString);
   

    //  manager expenses
    const managerExpensesField = getInputValue('manager-expenses-field');

    // coach expenses 
    const coachExpensesField = getInputValue('coach-expenses-field');

    //  calculate total expenses 
    const totalExpenses = playerExpenses + managerExpensesField + coachExpensesField;

    //   validation 
    if(Number.isNaN(totalExpenses)){
        return 
    }
    setElementValue('total-expenses', totalExpenses);
    

})

