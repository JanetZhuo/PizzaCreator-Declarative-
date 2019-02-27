function renderToppings(state) {
    const { toppings, selectedToppings } = state;

    const parentNode = document.querySelector('.toppings');
    clearNode(parentNode);

    toppings.forEach( topping => {
        const { name } = topping;

        const container = document.createElement('div');
        container.classList.add('topping')

        if (selectedToppings.find(({ name }) => name == topping.name)) {
            container.classList.add('active');
        }

        container.onclick = () => {
            onToppingClick(topping, state);
        }

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('img');

        const image = document.createElement('img');
        image.alt = name;
        image.src = `https://toddmotto.com/angular-pizza-creator/assets/toppings/${name}.svg`;
        
        const nameSpan = document.createElement('span');
        nameSpan.innerText = name;

        imageContainer.append(image);
        container.append(imageContainer,nameSpan);

        parentNode.append(container);
    });
}

function onToppingClick(topping, state) {
    const { selectedToppings } = state;
    const isExist = state.selectedToppings.find(({ name }) => name == topping.name);

    const newSelectedToppings = !isExist
        ? [{...topping, amount:1}, ...selectedToppings]
        : selectedToppings.filter(({ name }) => name != topping.name);

    state.selectedToppings = newSelectedToppings;
    render(state)
}

