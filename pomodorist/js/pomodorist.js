var countDownDate =25;


var x = setInterval(function() {
    var z= --countDownDate;
    var g=z-1;
 document.getElementById("demo").innerHTML =g;
    if (countDownDate<=0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "CaoZdravo";
       }
}, 60000);

function opa() {
    clearInterval(x); 
     clearInterval(y);
} 
  
function reset() {
    location.reload(true);
}

   var sekund=60;
   
   var y = setInterval(function() {
 document.getElementById("zemo").innerHTML = --sekund;
    if (sekund<=0) {
        sekund=60;
        }
       if (countDownDate==0) {
         clearInterval(y); 
          document.getElementById("zemo").innerHTML = "CaoZdravo"; 
       }
       
}, 1000); 
    
