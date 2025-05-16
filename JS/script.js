fetch ("./JS/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(obj) {
        jsonData = obj
        obj.forEach((e) => createDiv(e))
    });

const menuSection = document.querySelector('.foodMenu')

const createDiv = (obj) => {
    console.log(obj)
    
    menuSection.innerHTML+= `
    <section class="menuItem">
      <img class="foodImg" src="${obj.image.desktop}" alt="${obj.name}">
      <button class="addToCart"><img src="./assets/images/icon-add-to-cart.svg" alt="">Add to Cart</button>
      <section class="description">
        <p class="category">${obj.category}</p>
        <h3 class="foodNames">${obj.name}</h3>
        <p class="price">$${Number(obj.price).toFixed(2)}</p>
      </section>
    </section>
    `
}


