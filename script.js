const pizzas = [
  {
    "name": "Імпреза",
    "type": "М’ясна піца",
    "description": "Балик, салямі куриця, сир, моцарелла, сир рокфорд, ананаси, томатна паста, петрушка",
    "content": {
      "meat": ["балик", "салямі"],
      "chicken": ["куриця"],
      "cheese": ["сир моцарелла", "сир рокфорд"],
      "pineapple": ["ананаси"],
      "additional": ["томатна паста", "петрушка"]
    },
    "smallPrice": 99,
    "bigPrice": 169,
    "smallWeight": 370,
    "bigWeight": 660,
    "both": true,
    "state": "Нова", 
    "fullImg": "images/pizza_7.jpg",
    "halfImg": "images/halfPizza_7.png"
  },
  {
    "name": "BBQ",
    "type": "М’ясна піца",
    "description": "Мисливські ковбаски, ковбаски папероні, шинка, сир домашній, шампінйони, петрушка, оливки",
    "content": {
      "meat": ["мисливські ковбаски", "ковбаски папероні", "шинка"],
      "cheese": ["сир домашній"],
      "mushroom": ["шампінйони"],
      "additional": ["петрушка", "оливки"]
    },
    "smallPrice": 139,
    "bigPrice": 199,
    "smallWeight": 460,
    "bigWeight": 840,
    "both": true,
    "state": "Популярна",
    "fullImg": "images/pizza_2.jpg",
    "halfImg": "images/halfPizza_2.png"
  },
  {
    "name": "Міксовий поло",
    "type": "М’ясна піца",
    "description": "Вітчина, куриця копчена, сир моцарелла, ананаси, кукурудза, петрушка, соус томатний",
    "content": {
      "meat": ["вітчина", "куриця копчена"],
      "cheese": ["сир моцарелла"],
      "pineapple": ["ананаси"],
      "additional": ["соус томатний", "петрушка", "кукурудза"]
    },
    "smallPrice": 115,
    "bigPrice": 179,
    "smallWeight": 430,
    "bigWeight": 780,
    "both": true,
    "state": "none",
    "fullImg": "images/pizza_1.jpg",
    "halfImg": "images/halfPizza_1.png"
  },
  {
    "name": "Сицаліано",
    "type": "М’ясна піца",
    "description": "Лосось, сир моцарела, сир пармезан, болгарський перець, папероні чебрець, соус маринара",
    "content": {
      "meat": ["вітчина", "салямі"],
      "cheese": ["сир моцарелла"],
      "mushroom": ["шампінйони"],
      "additional": ["соус томатний", "перець болгарський"]
    },
    "smallPrice": 147,
    "bigPrice": 211,
    "smallWeight": 395,
    "bigWeight": 810,
    "both": true,
    "state": "none",
    "fullImg": "images/pizza_5.jpg",
    "halfImg": "images/halfPizza_5.png"
  },
  {
    "name": "Маргарита",
    "type": "Вега піца",
    "description": "Філе куряче, перець болгарський, сир моцарела, ананас, часник, соус маринара, соус BBQ",
    "content": {
      "cheese": ["сир моцарелла", "сир домашній"],
      "tomato": ["помідори"],
      "additional": ["базилік", "оливкова олія", "соус томатний"]
    },
    "smallPrice": 125,
    "bigPrice": 177,
    "smallWeight": 410,
    "bigWeight": 775,
    "both": true,
    "state": "none",
    "fullImg": "images/pizza_3.jpg",
    "halfImg": "images/halfPizza_3.png"
  },
  {
    "name": "Мікс смаків",
    "type": "М’ясна піца",
    "description": "Соус гірчичний, сир моцарела, ковбаски мисливські, салямі, цибуля, гриби, петрушка",
    "content": {
      "meat": ["ковбаски"],
      "cheese": ["сир моцарелла"],
      "mushroom": ["шампінйони"],
      "pineapple": ["ананаси"],
      "additional": ["цибуля кримська", "огірки квашені", "соус гірчичний"]
  },
    "smallPrice": 154,
    "bigPrice": 205,
    "smallWeight": 550,
    "bigWeight": 990,
    "both": true,
    "state": "none",
    "fullImg": "images/pizza_6.jpg",
    "halfImg": "images/halfPizza_6.png"
  },
  {
    "name": "Дольче Маре",
    "type": "Морська піца",
    "description": "Соус томатний, сир моцарела, салямі, шинка, томати, печериці та французькі трави",
    "content": {
      "ocean": ["криветки тигрові", "мідії", "ікра червона", "філе червоної риби"],
      "cheese": ["сир моцарелла"],
      "additional": ["оливкова олія", "вершки"]
    },
    "smallPrice": 110,
    "bigPrice": 0,
    "smallWeight": 540,
    "bigWeight": 0,
    "both": false,
    "state": "none",
    "fullImg": "images/pizza_8.jpg",
    "halfImg": "images/halfPizza_8.png"
  },
  {
    "name": "Россо Густо",
    "type": "Морська піца",
    "description": "Соус базилік, сир моцарела, мікс морепродуктів, ікра, мідії, лимон, зелень",
    "content": {
      "ocean": ["ікра червона", "лосось копчений"],
      "cheese": ["сир моцарелла"],
      "additional": ["оливкова олія", "вершки"]
    },
    "smallPrice": 136,
    "bigPrice": 196,
    "smallWeight": 375,
    "bigWeight": 825,
    "both": true,
    "state": "none",
    "fullImg": "images/pizza_4.jpg",
    "halfImg": "images/halfPizza_4.png"
  },
  {
    "name": "Товстий фраєр",
    "type": "Грибна піца",
    "description": "Соус томатний, сир моцарела, свинина, куряче філе, печериці, томати, солодкий перець",
    "content": {
      "meat": ["свинина", "куряче філе", "шинка"],
      "cheese": ["сир моцарела"],
      "mushroom": ["шампінйони"],
      "additional": ["солодкий перець", "печериці", "соус томатний"]
    },
    "smallPrice": 142,
    "bigPrice": 220,
    "smallWeight": 430,
    "bigWeight": 780,
    "both": true,
    "state": "none",
    "fullImg": "images/pizza_9.jpg",
    "halfImg": "images/halfPizza_9.png"
  }
];


function redirectToStatisticsPage() {
  window.location.href = 'statistic.html';
}


let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  addPizzasToMenu(pizzas);
  loadCart();
  updateCart();
});


function createPizzaElement(pizza) {
  const template = document.getElementById('pizza-template');
  const clone = template.content.cloneNode(true);

  clone.querySelector('.pizza-img').src = pizza.fullImg;
  clone.querySelector('.name').textContent = pizza.name;
  clone.querySelector('.type').textContent = pizza.type;
  clone.querySelector('.description').textContent = pizza.description;
  clone.querySelector('.small-weight').textContent = pizza.smallWeight;
  clone.querySelector('.big-weight').textContent = pizza.bigWeight;
  clone.querySelector('.small-price').textContent = pizza.smallPrice;
  clone.querySelector('.big-price').textContent = pizza.bigPrice;

  if (pizza.state == "Нова") {
      const badge = clone.querySelector('.badge');
      badge.classList.add('new');
      badge.textContent = pizza.state;
      badge.style.display = 'block';
  }

  if (pizza.state == "Популярна") {
      const badge = clone.querySelector('.badge');
      badge.classList.add('popular');
      badge.textContent = pizza.state;
      badge.style.display = 'block';
  }

  if (!pizza.both) {
      clone.querySelector('.size:last-child').style.display = 'none';
  }

  clone.querySelectorAll('.orng').forEach((button, index) => {
    button.addEventListener('click', () => {
      const size = index === 0 ? 'small' : 'big';
      addToCart(pizza, size);
    });
  });

  return clone;
}


function addPizzasToMenu(products) {
  const pizzaMenu = document.querySelector('.pizza-menu');
  products.forEach(pizza => {
      const pizzaElement = createPizzaElement(pizza);
      pizzaMenu.appendChild(pizzaElement);
  });
  updateTitle(products.length);
}



function updateTitle(amount) {
  const title = document.querySelector('.title h1');
  const count = document.querySelector('.title .amount');
  const selectedType = document.querySelector('.categories .selected');
  title.textContent = selectedType ? selectedType.textContent : "Усі";
  count.textContent = amount;
}

function giveProductsByType(type) {
  const FilteredItem = [];

  for (const product of pizzas) {
    const content = product.content;

    switch (type) {
      case "М'ясні":
        if (content.meat) FilteredItem.push(product);
        break;
      case "З ананасами":
        if (content.pineapple) FilteredItem.push(product);
        break;
      case "З грибами":
        if (content.mushroom) FilteredItem.push(product);
        break;
      case "З морепродуктами":
        if (content.ocean) FilteredItem.push(product);
        break;
      case "Вега":
        if (!content.meat && !content.chicken && !content.ocean) FilteredItem.push(product);
        break;
    }
  }

  return FilteredItem;
}



document.querySelector('.categories').addEventListener('click', (e) => {
  let element = e.target;
  if (element.classList.contains('pizza-type')) {

    document.querySelectorAll('.categories .pizza-type').forEach(button => {
      button.classList.remove('selected');});

    element.classList.add('selected');

    const pizzaMenu = document.querySelector('.pizza-menu');
    pizzaMenu.innerHTML = '';

    let typeName = element.textContent;
    
    if (typeName === "Усі") {
      addPizzasToMenu(pizzas);
    } else {
      const pizzaWithType = giveProductsByType(typeName);
      addPizzasToMenu(pizzaWithType);
    }
  }
});

function addToCart(pizza, size) {
  const cartItem = cart.find(item => item.pizza.name === pizza.name && item.size === size);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ pizza, size, quantity: 1 });
  }
  updateCart();
  saveCart();
}

function updateCart() {
  const orderList = document.querySelector('.order-list');
  orderList.innerHTML = '';

  cart.forEach(item => {
    const template = document.getElementById('order-item-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.ordered-pizza').textContent = `${item.pizza.name} (${item.size === 'small' ? 'Мала' : 'Велика'})`; 
    clone.querySelector('.radius .icon').textContent = item.size === 'small' ? '30' : '40';
    clone.querySelector('.weight .icon').textContent = item.size === 'small' ? item.pizza.smallWeight : item.pizza.bigWeight;
    const itemPrice = item.size === 'small' ? item.pizza.smallPrice : item.pizza.bigPrice;
    clone.querySelector('.order-price').textContent = `${itemPrice * item.quantity} грн`;
    clone.querySelector('.order-amount').textContent = item.quantity;
    clone.querySelector('.ordered-img').src = item.pizza.fullImg;

    clone.querySelector('.plus').addEventListener('click', () => {
      item.quantity += 1;
      updateCart();
      saveCart();
    });

    clone.querySelector('.minus').addEventListener('click', () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart.splice(cart.indexOf(item), 1);
      }
      updateCart();
      saveCart();
    });

    clone.querySelector('.cross').addEventListener('click', () => {
      cart.splice(cart.indexOf(item), 1);
      updateCart();
      saveCart();
    });

    orderList.appendChild(clone);
  });

  document.querySelector('.rheader .amount').textContent = cart.length;
  const totalPrice = cart.reduce((total, item) => total + (item.size === 'small' ? item.pizza.smallPrice : item.pizza.bigPrice) * item.quantity, 0);
  document.querySelector('.total-price-container .total-price:last-child').textContent = `${totalPrice} грн`;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart.length = 0;
    cart.push(...JSON.parse(savedCart));
  }
}

document.querySelector('.rdescription').addEventListener('click', () => {
  cart.length = 0;
  updateCart();
  saveCart();
});