const saveBillBtn = document.getElementById("save_button");

function saveBill() {
  if (billItems.length === 0) {
    alert("No items in the bill!");
    return;
  }
  const total = finalTotalEl.textContent;
  const payment = paymentMethod.value;
  alert(`Bill saved!\nTotal: ${total}\nPayment Method: ${payment}`);
}

saveBillBtn.addEventListener("click", saveBill);
