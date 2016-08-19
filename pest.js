//need to set variables by pulling from html

//var numberG = document.getElementById("goombaNumber").textContent;
//console.log(numberG);

function goomba(){
    var gooms = document.getElementById("goombaNumber").textContent;
    var total = gooms * 5 + " Coins";
    document.getElementById("goombaAmount").innerHTML = total;
}
goomba();


function bob(){
    var bobs = document.getElementById("bobNumber").textContent;
    var total = bobs * 7 + " Coins";
    document.getElementById("bobAmount").innerHTML = total;
}
bob();


function cheep(){
    var cheeps = document.getElementById("cheepNumber").textContent;
    var total = cheeps * 11 + " Coins";
    document.getElementById("cheepAmount").innerHTML = total;
}
cheep();


function totalCoin(){
    var gooms = document.getElementById("goombaNumber").textContent * 5;
    var cheeps = document.getElementById("cheepNumber").textContent * 7;
    var bobs = document.getElementById("bobNumber").textContent * 11;
    var invoiceTotal = gooms + cheeps + bobs;
    console.log(invoiceTotal)
    document.getElementById("totalAmount").innerHTML = invoiceTotal + " Coins";
}

totalCoin();