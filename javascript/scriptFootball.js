const categoryPrices = {
  ctg1: 100,
  ctg2: 75,
  ctg3: 50
};

const rows = document.querySelectorAll("table tbody tr");

rows.forEach(row => {
  const categorySelect = row.querySelector(".category");
  const quantityInput = row.querySelector(".quantity");
  const priceCell = row.querySelector(".price");

  categorySelect.addEventListener("change", () => {
    updatePrice();
  });

  quantityInput.addEventListener("input", () => {
    updatePrice();
  });

  function updatePrice() {
    const category = categorySelect.value;
    const quantity = quantityInput.valueAsNumber;
    const price = categoryPrices[category] * quantity;

    priceCell.textContent = `$${price || 0}`;
    updateTotalPrice();
  }
});

function updateTotalPrice() {
  const priceCells = document.querySelectorAll("table tbody tr .price");
  let totalPrice = 0;

  priceCells.forEach(priceCell => {
    const price = parseFloat(priceCell.textContent.substring(1));
    if (!isNaN(price)) { // Check if price is a valid number
      totalPrice += price;
    }
  });

  const totalCell = document.querySelector("#total-price");
  totalCell.textContent = `$${totalPrice}`;
}