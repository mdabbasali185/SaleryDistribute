// calculate button click
let balance = 0;
document.getElementById("calculate").addEventListener("click", function () {
    let incomeTextValue = document.getElementById("income")
    let textNumberValue = parseInt(incomeTextValue.value)
    let foodTextValue = document.getElementById("food")
    let countFoodValue = parseInt(foodTextValue.value)
    let rentTextValue = document.getElementById("rent")
    let countRentValue = parseInt(rentTextValue.value)
    let clothesTextValue = document.getElementById("clothes")
    let countClothesValue = parseInt(clothesTextValue.value)
    let total= countFoodValue+countFoodValue+countClothesValue
    // error handeling
    if (isNaN(textNumberValue) || isNaN(countFoodValue) || isNaN(countRentValue) || isNaN(countClothesValue)) {
        document.getElementById("modal_message").innerText = "fill up this box with number please."
        document.getElementById("error-msg").style.display = "block"
    } else if (textNumberValue < 0 || countFoodValue < 0 || countRentValue < 0 || countClothesValue<0){
        document.getElementById("modal_message").innerText = "Kindly fill up positive numbers."
        document.getElementById("error-msg").style.display = "block"
    }else if(textNumberValue<total){
        document.getElementById("modal_message").innerText = "Expenses larger than income."
        document.getElementById("error-msg").style.display = "block"
    }
    else{
        
        document.getElementById("total-expenses").innerText=total;
        balance=textNumberValue-total;
        document.getElementById("balance").innerText=balance;
    }
    
})

document.getElementById("percent-save").addEventListener("click", function(){
    let percentText = document.getElementById("percent")
    let percent = parseInt(percentText.value)
    let saving = (balance*percent)/100
    document.getElementById("saving-amount").innerText=saving
    document.getElementById("remaining-balance").innerText=balance-saving
})



document.getElementById('error-msg').addEventListener('click', function () {
    document.getElementById('error-msg').style.display = 'none'
})