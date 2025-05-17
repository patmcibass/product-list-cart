fetch ("./JS/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(obj) {
        jsonData = obj
        obj.forEach((e) => createDiv(e))
    });

const menuSection = document.querySelector('.foodMenu')
const cartCount = document.querySelector('#cartCount')
const myCart = document.querySelector('#myCart')
const emptyCart = document.querySelector('#emptyCart')
const cartFooter = document.querySelector('#cartTotalDiv')

let count = 0;

// populate site

const createDiv = (obj) => {

  // add on click to other buttons
  // maybe addToCart class on div??

  menuSection.innerHTML+= `
  <section class="menuItem" id="menuItem${count}">
  <img class="foodImg" src="${obj.image.desktop}" alt="${obj.name}">
  <button class="addToCart" onClick="addItemToCart(${count})" id="${count}"><img src="./assets/images/icon-add-to-cart.svg" alt="">Add to Cart</button>
  <div class="btnDiv none">
    <button id="minusBtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
    </button>
    <span id="itemCounter"></span>
    <button id="plusBtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
    </button>
  </div>
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

let itemCount = 1;

function addItemToCart(id) {
  // retrieve item name and price
  const itemName = document.querySelector(`#name${id}`).textContent
  const itemPrice = Number(document.querySelector(`#price${id}`).textContent.split('$')[1])

  console.log((itemPrice * 2).toFixed(2))

  emptyCart.classList.add('none')
  cartFooter.classList.remove('none')

  myCart.innerHTML+=`
  <section class="shoppingCartItem">
        <div>
          <h3>${itemName}</h3>
          <div>
            <span>${itemCount}x</span>
            <span>@$${itemPrice.toFixed(2)}</span>
            <span>$${(itemPrice * itemCount).toFixed(2)}</span>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
          <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
        </svg>

      </section>
  `



  // update cart to show item name

  // show item price

  // show item count
}