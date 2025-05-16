fetch ("./JS/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(obj) {
        jsonData = obj
        obj.forEach((e) => createDiv(e))
    });

const menuSection = document.querySelector('.foodMenu')


let count = 0;
let itemCount = 0;

// populate site

const createDiv = (obj) => {

  menuSection.innerHTML+= `
  <section class="menuItem" id="menuItem${count}">
  <img class="foodImg" src="${obj.image.desktop}" alt="${obj.name}">
  <button class="addToCart" onClick="addItemToCart(${count})" id="${count}"><img src="./assets/images/icon-add-to-cart.svg" alt="">Add to Cart</button>
  <section class="description">
  <p class="category">${obj.category}</p>
  <h3 class="foodNames" id="name${count}">${obj.name}</h3>
  <p class="price" id="price${count}">$${Number(obj.price).toFixed(2)}</p>
  </section>
  </section>
  `
  
  count++
}

const buttonList = document.getElementsByClassName('addToCart')


function addItemToCart(id) {
  // retrieve item name and price
  const itemName = document.querySelector(`#name${id}`).textContent
  const itemPrice = document.querySelector(`#price${id}`).textContent

  console.log(itemName, itemPrice)

  // update cart to show item name

  // show item price

  // show item count
}