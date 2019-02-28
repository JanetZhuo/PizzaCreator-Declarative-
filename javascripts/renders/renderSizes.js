function renderSizes(state) {
    const { sizes, selectedSize } = state;
  
    const parentNode = document.querySelector('.sizes');
    clearNode(parentNode);
  
    sizes.forEach((size) => {
      const { name, inches } = size;
  
      const sizeDiv = document.createElement('div');
      sizeDiv.classList.add('size');
  
      if (selectedSize && name === selectedSize.name) {
        sizeDiv.classList.add('active');
      }

      sizeDiv.onclick = () => {
        state.selectedSize = size;
        render(state);
      }

      const pizzaImage = document.createElement('img');
      pizzaImage.src = './pizza.png';
      pizzaImage.classList.add('pizza', name);
      const sizeSpan = document.createElement('span');
      sizeSpan.innerText = `${name} (${inches}')`;
  
      sizeDiv.append(pizzaImage, sizeSpan);
  
      parentNode.append(sizeDiv);
    });
  } 