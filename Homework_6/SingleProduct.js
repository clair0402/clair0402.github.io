var productpicture = ["Original.png", "Sugar-milk.png", "Vanilla-milk.png", "Double-Chocolate.png"];
var productPrice = ["$3.99", "$10.5", "$20", "$32"];
//var bun =  [];

function BunBun(name, glazing, price, quantity, img) {
  this.name = name;
  this.glazing = glazing;
  this.price = price;
  this.quantity = quantity;
  this.img = img;
}

function generateBun(name, dropdownG, price, dropdownQ, img){
    return new BunBun(name, dropdownG, price, dropdownQ, img);
}





function onLoad() {

    //var dropdownQ = document.getElementById("qty").value;
    var dropdownQ = document.getElementById("qty1");
    var dropdownG = document.getElementById("glazing1");
    var pImage = productpicture[dropdownG.selectedIndex]
    var price = productPrice[dropdownQ.selectedIndex];
    var name = "Original Bun";
    //var

    //document.getElementById("button1").addEventListener("click", function() {

        //var newbun = generateBun(name,glazing, price, quantity);
        //cartItem+=1;
        //localStorage.setItem('savedBun', JSON.stringify(bun))
        //addItem(newbun)
        // bun.push(JSON.parse(localStorage.getItem("savedBun")));
        // console.log(bun);
        // localStorage.setItem("savedBun", JSON.stringify(bun));


        // cartItem = allbuns.length;

        // if (hasSavedBun){
        //     document.getElementById("cart").textContent = "1";
        // }else{
        //     localStorage.setItem("savedBun", JSON.stringify(bun));
        //     document.getElementById("cart").textContent = "1";
        // }
    //});

    document.getElementById("aprice").textContent = price ;
    //document.getElementById("calories").textContent
    document.getElementById("original").setAttribute("src", pImage);


};



var cartItem = 0;

function onClick (){
    var dropdownQ = document.getElementById("qty1");
    var dropdownG = document.getElementById("glazing1");
    var price = productPrice[dropdownQ.selectedIndex];
    var quantity = document.getElementById("qty1").value;
    var glazing = document.getElementById("glazing1").value;
    var img = productpicture[dropdownG.selectedIndex];
    var name = "Original Bun";

    var newbun = generateBun(name,glazing, price, quantity, img);

    var bun = [];

    if ("bun" in localStorage) {
        bun = JSON.parse(localStorage.getItem("bun"));
    }

    bun.push(newbun);

    cartItem=bun.length;
    localStorage.setItem("len", JSON.stringify(cartItem));
    localStorage.setItem("bun", JSON.stringify(bun));
    localStorage.setItem("img", JSON.stringify(img));

    var globalL = localStorage.getItem("len");
    //console.log(globalL);
    document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + globalL + ")";

}

function loadCart(){
    var globalL = localStorage.getItem("len");
    //console.log(globalL)
    if (globalL == null){
        document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + 0 + ")";
    }else{
        document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + globalL + ")";
    }
}


window.onload = function() {
    placeImage(48);
};