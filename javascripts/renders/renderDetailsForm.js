function renderDetailsForm(state) {
    const { inputs } = state;

    const parentNode = document.querySelector('.details');
    clearNode(parentNode);

    inputs.forEach(({ name, value }) => {
      const formControlDiv = document.createElement('div');
      formControlDiv.classList.add('form-control');

      const label = document.createElement('label');
      label.innerText = name;

      const input = document.createElement('input');
      input.value = value;
      input.type = 'text';

      formControlDiv.append(label, input);

      parentNode.append(formControlDiv);
    });
    }