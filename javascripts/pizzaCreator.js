function main() {

  const selectedToppings = [];

  const state = {
    toppings,
    sizes,
    customer,
    selectedToppings,
    selectedSize: null,
    isDisplayConfirmationModal: false,
  };

  render(state);

  document.querySelector('button[type="submit"]').onclick = () => {
      state.isDisplayConfirmationModal = true;
      render(state);
      console.log(state.isDisplayConfirmationModal)
  };
}

function render(state) {
  renderDetailsForm(state);
  renderToppings(state);
  renderSizes(state);
  renderTotal(state);
  renderSummary(state);
  renderConfirmationModal(state);
}

document.addEventListener('DOMContentLoaded', main); 
