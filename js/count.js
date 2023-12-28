 const decrementButton = document.getElementById('decrement');
  const incrementButton = document.getElementById('increment');
  const quantityInput = document.getElementById('quantity');
  const itemCountSpan = document.getElementById('itemCount');
  const totalAmounttSpan = document.getElementById('totalAmountt');
  const totalAmountSpan = document.getElementById('totalAmount');
  const pricePerItem = 19500;

  decrementButton.addEventListener('click', () => {
    if (parseInt(quantityInput.value) > 0) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
      updateSummary();
    }
  });

  incrementButton.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateSummary();
  });

  decrementButton.addEventListener('click', () => {
    if (parseInt(quantityInput.value) > 0) {
      quantityInput.value = parseInt(quantityInput.value);
      updateSummaryy();
    }
  });

  incrementButton.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value);
    updateSummaryy();
  });

  function updateSummary() {
    const quantity = parseInt(quantityInput.value);
    const totalAmountt = quantity * pricePerItem;

    itemCountSpan.textContent = quantity;
    totalAmounttSpan.textContent = totalAmountt;
  }

  function updateSummaryy() {
    const quantity = parseInt(quantityInput.value);
    const totalAmount = quantity * pricePerItem;

    itemCountSpan.textContent = quantity;
    totalAmountSpan.textContent = totalAmount;
  }
