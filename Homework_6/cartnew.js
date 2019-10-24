var globalL = localStorage.getItem("len");
var buns = JSON.parse(localStorage.getItem("bun"));

function loadCart(){
    //console.log(globalL)
    if (globalL == null){
        document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + 0 + ")";
    }else{
        document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + globalL + ")";
    }
}


function addItemToCart(imageSrc, title, price, qty, glazing) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cartItems')[0]
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="listingimg1" src="${imageSrc}" >
            <span class="cart-item-title">${title}</span>
        </div>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value= "${qty}">
        </div>
        <span class="cart-glazing cart-column">${glazing}</span>
        <span class="cart-price cart-column">${price}</span>
        <div class="deletePh cart-column">
            <button class="removeButton" type="button">Delete</button>
        </div>
        `
    cartRow.innerHTML = cartRowContents
    cartItems.appendChild(cartRow);
    cartRow.getElementsByClassName('removeButton')[0].addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    //updateCartTotal()
}

function cartItems(){
    if (globalL==null){
        console.log("please add a product")
    }else{

        for (i = 0; i <= globalL-1; i++){
            imgs = buns[i].img;
            title = "The Original";
            price = buns[i].price;
            qty = buns[i].quantity;
            glazing = buns[i].glazing;
            addItemToCart(imgs, title, price, qty, glazing)
        }
    }
}