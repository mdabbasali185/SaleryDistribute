// calculate button click
function errorFunction(errorText) {
    document.getElementById("modal_message").innerText = errorText
    document.getElementById("error-msg").style.display = "block"
}
// input clear function
function inputClear(arr) {
    let clearInput
    for (const input of arr) {
        let inputValue = document.getElementById(input)
        clearInput = inputValue.value = "";
    }
    return clearInput;
}
// input inner value
function inputInnerValue(id) {
    let textValue = document.getElementById(id)
    return parseInt(textValue.value)
}
let balance = 0;
document.getElementById("calculate").addEventListener("click", function () {
    let textNumberValue = inputInnerValue("income")
    let countFoodValue = inputInnerValue("food")
    let countRentValue = inputInnerValue("rent")
    let countClothesValue = inputInnerValue("clothes")
    let total = countFoodValue + countFoodValue + countClothesValue
    // error handeling
    if (isNaN(textNumberValue) || isNaN(countFoodValue) || isNaN(countRentValue) || isNaN(countClothesValue)) {
        errorFunction("fill up this box with number please.")

    } else if (textNumberValue < 0 || countFoodValue < 0 || countRentValue < 0 || countClothesValue < 0) {
        errorFunction("Kindly fill up positive numbers.")

    } else if (textNumberValue < total) {
        errorFunction("Expenses larger than income.")

    }
    else {

        document.getElementById("total-expenses").innerText = total;
        balance = textNumberValue - total;
        document.getElementById("balance").innerText = balance;
    }
    inputClear(["income", "food", "rent", "clothes"])
})

document.getElementById("percent-save").addEventListener("click", function () {

    let percentText = document.getElementById("percent")
    let percent = parseInt(percentText.value)
    if (percent == "" || isNaN(percent)) {
        errorFunction("valid number only.")
    } else if (percent < 0) {
        errorFunction("positive number only.")
    }
    else if (percent > 100) {
        errorFunction("You can't save more money that you have")
    } else {
        let saving = ((balance * percent) / 100).toFixed(2)
        document.getElementById("saving-amount").innerText = saving
        document.getElementById("remaining-balance").innerText = (balance - saving).toFixed(2)
    }
    inputClear(["percent"])
})
document.getElementById('error-msg').addEventListener('click', function () {
    document.getElementById('error-msg').style.display = 'none'
})