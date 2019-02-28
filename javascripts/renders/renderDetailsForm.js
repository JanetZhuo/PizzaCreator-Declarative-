function renderDetailsForm(state) {
    let { customer } = state;

    const parentNode = document.querySelector('.details');
    clearNode(parentNode);

    customer.forEach((customerDetail) => {
      const { label, name } = customerDetail;
      let { value } = customerDetail;

      const formControlDiv = document.createElement('div');
      formControlDiv.classList.add('form-control');

      formControlDiv.onchange = () => {
        onDetailsFormDataChange(customerDetail, state);
      }

      const labelHTML = document.createElement('label');
      labelHTML.innerText = label;

      let inputHTML = document.createElement('input');
      inputHTML.value = value;
      inputHTML.type = 'text';
      inputHTML.name = name;

      formControlDiv.append(labelHTML, inputHTML);

      parentNode.append(formControlDiv);
    });
    }


function onDetailsFormDataChange(customerDetail, state) {
  let newValue = document.querySelector(`input[name=${customerDetail.name}]`).value;
  customerDetail.value = newValue;

  render(state);
}