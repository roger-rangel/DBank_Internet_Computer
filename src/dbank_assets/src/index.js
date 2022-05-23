import { dbank } from "../../declarations/dbank";
const form = document.querySelector("form");

window.addEventListener("load", async function(event) {
  update();
})

form.addEventListener("submit", async function(e) {
  e.preventDefault;
  console.log('submited');

  const button = e.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const withdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);
  
  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmount)
  } 
  
  if (document.getElementById("withdrawal-amount").value.length != 0 ) {
    await dbank.withdraw(withdrawalAmount)
  }
  
  await dbank.compound();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
})

async function update() {
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
};

