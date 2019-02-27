function main() {

  const selectedToppings = []

  const state = {
    toppings,
    sizes,
    inputs,
    selectedToppings,
    selectedSize: null,
    isDisplayConfirmationModal: false,
  };

  render(state);

  document.querySelector('button[type="submit"]').onclick = () => {
      state.isDisplayConfirmationModal = true;
      render(state);
  };
}

function render(state) {
  renderDetailsForm(state);
  renderToppings(state);
  renderSizes(state);
  renderTotal(state);
  renderSummary(state);
}

document.addEventListener('DOMContentLoaded', main); 
