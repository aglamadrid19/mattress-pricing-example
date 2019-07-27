// Get Real Price & Total Price

realPrice = document.getElementById('realPrice');
totalPrice = parseFloat(realPrice.innerText);

// Check Inputs

Check1 = document.getElementById('Check1');
Check2 = document.getElementById('Check2');
Check3 = document.getElementById('Check3');
Check4 = document.getElementById('Check4');

// Get AddOn Prices

addon1 = parseFloat(document.getElementById('addon1').innerHTML);
addon2 = parseFloat(document.getElementById('addon2').innerHTML);
addon3 = parseFloat(document.getElementById('addon3').innerHTML);
addon4 = parseFloat(document.getElementById('addon4').innerHTML);

// Add event Listners

document.getElementById("Check1").addEventListener("click", function(){
    if(this.checked) {
        console.log("Is Chcked");
        totalPrice = totalPrice + addon1;
        realPrice.innerText = totalPrice;
        
    } else {
        console.log("button is not checked");
        totalPrice = totalPrice - addon1;
        realPrice.innerText = totalPrice;
    }
});

document.getElementById("Check2").addEventListener("click", function(){
    if(this.checked) {
        console.log("Is Chcked");
        console.log(totalPrice)
        totalPrice = totalPrice + addon2;
        realPrice.innerText = totalPrice;
        
    } else {
        console.log("button is not checked");
        totalPrice = totalPrice - addon2;
        realPrice.innerText = totalPrice;
    }
});

document.getElementById("Check3").addEventListener("click", function(){
    if(this.checked) {
        console.log("Is Chcked");
        totalPrice = totalPrice + addon3;
        realPrice.innerText = totalPrice;
        
    } else {
        console.log("button is not checked");
        totalPrice = totalPrice - addon3;
        realPrice.innerText = totalPrice;
    }
});

document.getElementById("Check4").addEventListener("click", function(){
    if(this.checked) {
        console.log("Is Chcked");
        totalPrice = totalPrice + addon4;
        realPrice.innerText = totalPrice;
        
    } else {
        console.log("button is not checked");
        totalPrice = totalPrice - addon4;
        realPrice.innerText = totalPrice.toFixed(2);
    }
});

