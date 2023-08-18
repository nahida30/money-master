function calculateBtn(){
    const incomeValue = getInputValue('incomeFeild');
    console.log(incomeValue);
    const foodValue = getInputValue('food-value');
    console.log(foodValue);
    const rentValue = getInputValue('rent-value');
    console.log(rentValue);
    const clothesValue = getInputValue('clothes-value');
    console.log(clothesValue);

    const totalExpenses = foodValue + rentValue + clothesValue;
    console.log(totalExpenses);

    const totalExpensesValue = document.getElementById('expenses-value');
    totalExpensesValue.innerText = totalExpenses;

    const totalBalane = incomeValue - totalExpenses;
    console.log(totalBalane);

    const BalanceValue = document.getElementById('balace-value');
    BalanceValue.innerText = totalBalane;



}

// common function 

function getInputValue(inputValue){
    const moneyValue = document.getElementById(inputValue);
    const moneyInnerText = moneyValue.value;
    const money = parseFloat(moneyInnerText);
    return money;
}


// percent 

function saveBtn(){
    const userNumber = document.getElementById('user-number');
    const userNumberValue = userNumber.value;
    const user = parseFloat(userNumberValue);
    console.log(user);

    const savePercent = (user/100)*10000;
    console.log(savePercent);

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = savePercent;


    const BalanceValue = parseFloat(document.getElementById('balace-value').innerText);
    const remainingAmount = BalanceValue - savePercent;
    console.log(remainingAmount);

    const remainingAmountValue = document.getElementById('remaining-amount'); 
    remainingAmountValue.innerText = remainingAmount;


}