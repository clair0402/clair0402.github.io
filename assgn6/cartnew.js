
var buns;
var globalL;
var deleteid;

function loadCart(){
    //console.log(globalL)
    var buns = JSON.parse(localStorage.getItem("bun"));
    var globalL = buns.length;
    if (globalL == null){
        document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + 0 + ")";
    }else{
        document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + globalL + ")";
    }
}

/*function cartItems(){
    //console.log(globalL)
    buns = JSON.parse(localStorage.getItem("bun"));
    globalL = buns.length;
        for (i = 0; i <= globalL-1; i++){
            imgs = buns[i].img;
            title = "The Original";
            price = buns[i].price;
            qty = buns[i].quantity;
            glazing = buns[i].glazing;
            deleteid = i+1;
            console.log("deleteId1:" + deleteid);
            addItemToCart(imgs, title, price, qty, glazing, deleteid)
            console.log("deleteId2:" + deleteid);
        }
    var total = 0;
    for (i = 0; i <= globalL-1; i++) {
        var bunP = buns[i].price;
        var price2 = parseFloat(bunP.replace('$', ''));
        total = total + price2;
        document.getElementById('Subtotal').innerHTML = "$" + total;
        document.getElementById('orderTotal').innerHTML = "$" + total;
    }

}


function addItemToCart(imageSrc, title, price, qty, glazing, deleteid) {
    var globalL = localStorage.getItem("len");
    var buns = JSON.parse(localStorage.getItem("bun"));
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
            <button id = "${deleteid}" class="removeButton" type="button">Delete</button>
        </div>
        `
    if (globalL==null){
        cartRow.style.cssText = 'width:100%;'
    }
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);
    cartRow.getElementsByClassName('removeButton')[0].addEventListener('click', function(){
        buns = JSON.parse(localStorage.getItem("bun"));
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        var deleteItem = buns.splice(deleteid-1, 1);
        localStorage.setItem("bun", JSON.stringify(buns));
        buns = JSON.parse(localStorage.getItem("bun"));
        globalL = buns.length;
        console.log(buns);
        loadCart();

    });


}*/


function cartItems(){
    //console.log(globalL)
    buns = JSON.parse(localStorage.getItem("bun"));
    globalL = buns.length;
        for (i = 0; i <= globalL-1; i++){
            imgs = buns[i].img;
            title = "The Original";
            price = buns[i].price;
            qty = buns[i].quantity;
            glazing = buns[i].glazing;
            deleteid = buns[i].id;
            console.log("deleteId1:" + deleteid);
            addItemToCart(imgs, title, price, qty, glazing, deleteid)

        }
    var total = 0;
    for (i = 0; i <= globalL-1; i++) {
        var bunP = buns[i].price;
        var price2 = parseFloat(bunP.replace('$', ''));
        total = total + price2;
        console.log(total)
        document.getElementById('Subtotal').innerHTML = "$" + total.toFixed(2);
        document.getElementById('orderTotal').innerHTML = "$" + total.toFixed(2);
    }

}


function addItemToCart(imageSrc, title, price, qty, glazing, deleteid) {
    //var globalL = localStorage.getItem("len");
    var buns = JSON.parse(localStorage.getItem("bun"));
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
            <button id = "${deleteid}" class="removeButton" type="button">Delete</button>
        </div>
        `
    if (globalL==null){
        cartRow.style.cssText = 'width:100%;'
    }
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);
    cartRow.getElementsByClassName('removeButton')[0].addEventListener('click', function(){
        buns = JSON.parse(localStorage.getItem("bun"));
        console.log(buns)
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        console.log("arrayL"+globalL)
        for (i = 0; i < buns.length; i++){
            if (buns[i].id == deleteid){
                console.log("deleteid:" +deleteid);
                buns.splice(i, 1);
                localStorage.setItem("bun", JSON.stringify(buns));
            }
        }

        console.log(buns);
        loadCart();

    });


}

