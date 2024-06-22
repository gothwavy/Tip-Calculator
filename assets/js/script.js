const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip-amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";
  if (tip === "NaN"){
    tipAmount.textContent = "R$0 de gorjeta por pessoa";
    showTipAmount();
  }
  else{
    tipAmount.textContent = `R$${tip} de gorjeta por pessoa`;
    showTipAmount();
  }
}

showTipAmount = () => {
  let x = document.querySelector("#tip-amount");
  x.className = "show";
  setTimeout(function(){ x.className.replace("show", ""); }, 3000)
}