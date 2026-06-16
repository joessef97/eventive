 const price = 90;
      const quantityInputs = document.querySelectorAll(".quantity");
      const priceCells = document.querySelectorAll(".price");
      const totalCell = document.querySelector("#total-price");

      function updatePrice(event) {
        const quantity = event.target.valueAsNumber;
        const price = quantity * 90;
        const priceCell = event.target.parentElement.nextElementSibling;
        priceCell.textContent = `$${price}`;
        updateTotalPrice();
      }

      function updateTotalPrice() {
        let totalPrice = 0;
        priceCells.forEach(priceCell => {
          const price = parseFloat(priceCell.textContent.substring(1));
          if (!isNaN(price)) {
            totalPrice += price;
          }
        });
        totalCell.textContent = `$${totalPrice}`;
      }

      quantityInputs.forEach(quantityInput => {
        quantityInput.addEventListener("input", updatePrice);
      });