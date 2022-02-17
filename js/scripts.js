// calculate
document.getElementById('calculate-btn').addEventListener('click', function() {
    // get income input value
    const incomeInputField = document.getElementById('income-input-field');
    const incomeInputFieldGetValue = incomeInputField.value;
    const incomeInputFieldGetValueConvert = parseInt(incomeInputFieldGetValue);
    // console.log(incomeInputFieldGetValueConvert)
    // to claear income input value
    incomeInputField.value = '';

    // get expensess values
    // food
    const foodInputField = document.getElementById('food-input-field');
    const foodInputFieldGetValue = foodInputField.value;
    const foodInputFieldGetValueConvert = parseInt(foodInputFieldGetValue);
    // console.log(foodInputFieldGetValueConvert);
    // to clear food input field
    // foodInputField.value = '';

    // rent
    const rentInputField = document.getElementById('rent-input-field');
    const rentInputFieldGetValue = rentInputField.value;
    const rentInputFieldGetValueConvert = parseInt(rentInputFieldGetValue);
    // console.log(rentInputFieldGetValueConvert);
    // to clear rent input
    // rentInputField.value = '';


    // cloths
    const clothsInputField = document.getElementById('cloths-input-field');
    const clothsInputFieldGetValue = clothsInputField.value;
    const clothsInputFieldGetValueConvert = parseInt(clothsInputFieldGetValue);
    // console.log(clothsInputFieldGetValueConvert);
    // to clear cloths input value
    // clothsInputField.value = '';

    /// expense sumition
    const totalExpense = foodInputFieldGetValueConvert + rentInputFieldGetValueConvert + clothsInputFieldGetValueConvert;
    // console.log(totalExpense);

    // diffrence between income and expenses
    const diffrence = incomeInputFieldGetValueConvert - totalExpense;
    // console.log(diffrence)



    // total expense under the  Calculate Button
    const totalExpenseAmount = document.getElementById('total-expense');
    totalExpenseAmount.innerText = totalExpense;


    // remaing balance after reducing from expense
    const balanceReduce = document.getElementById('balance-reduce');
    balanceReduce.innerText = diffrence;


});


// savings Selection
document.getElementById('savings-calc-btn').addEventListener('click', function() {
    event.preventDefault();
    // get input value
    const savingsInputField = document.getElementById('savings-input-field');
    const savinsInputFieldGetValue = savingsInputField.value;
    const savinsInputFieldGetValueConvert = parseInt(savinsInputFieldGetValue);
    console.log(savinsInputFieldGetValueConvert)




    // balance and savings convertion
    // const savingsConversion = parseInt(savinsInputFieldGetValueConvert) % parseInt(balanceReduce);
    // console.log(savingsConversion);


})