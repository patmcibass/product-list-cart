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
const emptyCart = document.getElementById('emptyCart')
const cartFooter = document.querySelector('#cartTotalDiv')
const orderTotal = document.querySelector('#orderTotal')




let count = 0;

// populate site

const createDiv = (obj) => {

  // add on click to other buttons
  // maybe addToCart class on div??

  menuSection.innerHTML+= `
  <section class="menuItem" id="menuItem${count}">
  <img class="foodImg" id="foodImg${count}" src="${obj.image.desktop}" alt="${obj.name}">
  <button class="addToCart" onClick="addItemToCart(${count})" id="${count}"><img src="./assets/images/icon-add-to-cart.svg" alt="">Add to Cart</button>
  <div id=plusMinusDiv${count} class="btnDiv none">
    <button class="plus-minusBtn" onClick="minusItems(${Number(obj.price).toFixed(2)}, ${count})" id="minusBtn${count}">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
    </button>
    <span class="countSpanNumber" id="itemCounter${count}">1</span>
    <button class="plus-minusBtn" onClick="plusItems(${Number(obj.price).toFixed(2)}, ${count})" id="plusBtn${count}">
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
// make this work instead and have it display none
   myCart.innerHTML+=`
      <section id="cartItem${count}" class="shoppingCartItem none">
        <div>
          <h3>${obj.name}</h3>
          <div>
            <span id="itemCount${count}">0</span>
            <span id="itemPriceSpan${count}">@$${Number(obj.price).toFixed(2)}</span>
            <span id="itemTotalPrice${count}"></span>
          </div>
        </div>

        <svg onClick="removeItem(${count})" id="remove${count}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
          <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
        </svg>

      </section>
  `
  
  count++
}

const buttonList = document.getElementsByClassName('addToCart')

let cartTotal = 0;
// let itemCount = 1;

function addItemToCart(id) {

  // change button layout
  const btn = document.getElementById(id)
  btn.classList.add('none')
  const plusMinusDiv = document.getElementById(`plusMinusDiv${id}`)
  plusMinusDiv.classList.remove('none')
  const foodImg = document.getElementById(`foodImg${id}`)
  // ***********************************
  // Need to style new div and buttons
  
  
  // retrieve item name and price
  const itemName = document.querySelector(`#name${id}`).textContent
  const itemPrice = Number(document.querySelector(`#price${id}`).textContent.split('$')[1])
  
  
  emptyCart.classList.add('none')
  cartFooter.classList.remove('none')
  foodImg.classList.add('redBorder')

  // remove none class
  removeNone(id)


  // make own function and call here
  addCountsToCart(itemPrice, id)


  // get cart total
  orderTotal.textContent = `$${cartTotal.toFixed(2)}`

}

// event listeners for plus buttons
function plusItems(itemPrice, id){
  const itemCountSpan = document.getElementById(`itemCount${id}`)
  let itemCount = Number(itemCountSpan.textContent)
  itemCount++
  const priceTimesCount = itemPrice * itemCount 


  itemCountSpan.textContent = itemCount

  const itemTotalPrice = document.getElementById(`itemTotalPrice${id}`)
  itemTotalPrice.textContent = `$${priceTimesCount.toFixed(2)}`

  cartTotal += itemPrice
  orderTotal.textContent = `$${cartTotal.toFixed(2)}`

  // update count in button
  const counterSpan = document.getElementById(`itemCounter${id}`)
  let count = Number(counterSpan.textContent)
  count++
  counterSpan.textContent = count
}


// event listeners for minus buttons
function minusItems(itemPrice, id){
  const itemCountSpan = document.getElementById(`itemCount${id}`)
  let itemCount = Number(itemCountSpan.textContent)
  const counterSpan = document.getElementById(`itemCounter${id}`)
  let count = Number(counterSpan.textContent)
  const itemTotalPrice = document.getElementById(`itemTotalPrice${id}`)
  let priceTimesCount

  if(itemCount > 1){
    itemCount--
    priceTimesCount = itemPrice * itemCount
    // update count in button
    count--
    counterSpan.textContent = count
  }else {
    itemCount = 0
    priceTimesCount = itemPrice * itemCount
    const cartItemSection = document.getElementById(`cartItem${id}`)
    cartItemSection.classList.add('none')

    const btn = document.getElementById(id)
    btn.classList.remove('none')
    const plusMinusDiv = document.getElementById(`plusMinusDiv${id}`)
    plusMinusDiv.classList.add('none')

    const foodImg = document.getElementById(`foodImg${id}`)
    foodImg.classList.remove('redBorder')

  }
  itemTotalPrice.textContent = `$${priceTimesCount.toFixed(2)}`
  itemCountSpan.textContent = itemCount
  cartTotal -= itemPrice
  orderTotal.textContent = `$${cartTotal.toFixed(2)}`

}

function addCountsToCart(itemPrice, id){
  
  const itemCountSpan = document.getElementById(`itemCount${id}`)
  let itemCount = Number(itemCountSpan.textContent)
  itemCount++
  const priceTimesCount = itemPrice * itemCount 

  itemCountSpan.textContent = itemCount

  const itemTotalPrice = document.getElementById(`itemTotalPrice${id}`)
  itemTotalPrice.textContent = `$${priceTimesCount.toFixed(2)}`

  cartTotal += priceTimesCount

}

// remove None class

function removeNone(id){
  const cartItemSection = document.getElementById(`cartItem${id}`)
  cartItemSection.classList.remove('none')
}

function removeItem(id) {
  const item = document.getElementById(`cartItem${id}`)
  console.log(item)
}