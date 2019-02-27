function getToppingsString(toppings) {
    let result = '';
  
    toppings.forEach(({ name, amount }, index) => {
      result = index === 0 ? `${name} * ${amount}` : `${result}, ${name} * ${amount}`;
    });
  
    return result;
  }