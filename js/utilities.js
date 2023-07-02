
function getNumberByClick(elementId, IsIncrease, PriceId, priceValue) {
    const fieldValue = document.getElementById(elementId);
    const fieldValueString = fieldValue.value;
    const previousNumber = parseInt(fieldValueString);
    //Here increase or decrease total number base on IsIncrease Value
    if (IsIncrease === true) {
        totalNumber = previousNumber + 1;
    }
    else {
        totalNumber = previousNumber - 1;
    }
    //get the price field
    const textField = document.getElementById(PriceId);
    //checking total number value and set the price
    if (totalNumber >= 0) {
        fieldValue.value = totalNumber;
        textField.innerText = totalNumber * priceValue;
        return
    }
    else {
        fieldValue.value = 0;
    }
}
function subTotalCalculation() {
    const phonePriceString = document.getElementById('innerText-1').innerText;
    const phonePrice = parseFloat(phonePriceString);
    const casePriceString = document.getElementById('innerText-2').innerText;
    const casePrice = parseFloat(casePriceString);
    const subTotalPrice = phonePrice + casePrice;
    document.getElementById('sub-total').innerText = subTotalPrice.toFixed(2);
    //tax calculation with total price
    textCalculation();
    function textCalculation() {
        const taxPrice = subTotalPrice * 0.1;
        document.getElementById('tax-amount').innerText = taxPrice.toFixed(2);
        //get and set total price
        const totalPrice = subTotalPrice + taxPrice;
        console.log(totalPrice)
        document.getElementById('total-amount').innerText = totalPrice.toFixed(2);
    }

}

