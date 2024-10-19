let bill_amount_input = document.getElementById("billAmount");
let percentage_tip_input = document.getElementById("percentageTip");
let tip_amount = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

function calculateButton() {
    let userInputBill = bill_amount_input.value;
    let userInputTipPer = percentage_tip_input.value;

    if (userInputBill === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else if (userInputTipPer === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else {
        let billAmount = parseInt(userInputBill);
        let percentageTip = parseInt(userInputTipPer);
        errorMessage.textContent = "";
        let calculatedTip = (percentageTip / 100) * billAmount;
        let totalAmountCalc = billAmount + calculatedTip;
        tip_amount.value = calculatedTip;
        total.value = totalAmountCalc;
    }

}