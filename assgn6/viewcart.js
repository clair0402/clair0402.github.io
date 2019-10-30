var productpicture = ["Original.png", "Sugar-milk.png", "Vanilla-milk.png", "Double-Chocolate.png"];

function loadCart(){
    var globalL = localStorage.getItem("len");
    //console.log(globalL)
    if (globalL == null){
        document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + 0 + ")";
    }else{
        document.getElementById("cart").getElementsByTagName('a')[0].textContent = "Cart (" + globalL + ")";
    }
}

function getImg(){
    var buns = JSON.parse(localStorage.getItem("bun"));
    var div = document.getElementById("listingimg1");

    div.innerHTML = ""; // clear images
    //console.log(getImg())
    var globalL = localStorage.getItem("len");
    for (i = 0; i <= globalL-1; i++){
        imgs = buns[i].img;
        var cartImg=document.createElement("img");
        cartImg.src=imgs;
        cartImg.style.cssText = 'width: 140px; padding-top: 10px; float:left;'
        div.appendChild(cartImg);
        console.log("img"+div)
    }
}

function getQ(){
    var buns = JSON.parse(localStorage.getItem("bun"));
    var div = document.getElementById("glazing1");
    div.innerHTML = "";
    var globalL = localStorage.getItem("len");
    for (i = 0; i<=globalL-1;i++){
        var cartGlaze = document.createElement("div");
        var glaze2 = buns[i].glazing;
        cartGlaze.textContent = "Glazing: "+ glaze2;
        cartGlaze.style.cssText = 'padding-top: 50px;'
        div.appendChild(cartGlaze);
        console.log(div)
    }
}

/*
function getQ(){
    var buns = JSON.parse(localStorage.getItem("bun"));
    var globalL = localStorage.getItem("len");


    //console.log(globalL)
    var select = document.getElementById("glazing1").children;
    console.log(select)
    for (i = 0; i<=3;i++){
        var selectedOption = select[i].value;
        var glaze = buns[i].glazing;
        console.log(selectedOption)
        console.log(glaze)
        if (glaze == selectedOption){
            //console.log
        }
    }




    /*var selectSection = document.getElementById("glazingSelect");
    console.log(selectSection)

    for (t = 0; t <= globalL-1; t++){
        var cartD = document.createElement("option");

        var glaze = buns[t].glazing;
        //console.log(glaze)
        cartD.value = glaze;
        cartD.textContent = glaze;
        //console.log(cartD)
        select.appendChild(cartD);
        //selectSection.appendChild(cartD);
    }
}

    /*var opts = select.options.length;
    var globalL = localStorage.getItem("len");


    for (t = 0; t = globalL-1; t++){
           glaze = buns[t].glazing;
        for (i = 0; i <= opts-1; i++){
            console.log(select.options[0].value)
            //console.log(opts)
            //console.log(glaze)
            var selectV = select.options[i].value;
            if (selectV == glaze){
                select.options[i].selected = true;
            break;
            }
        //var cartD = document.createElement("glazing");
        //select.textContent = "Vanilla-milk";
        /*if (selectV == glaze){
            select.options[i].selected = true;
            break;
        }
    }
    }*/




