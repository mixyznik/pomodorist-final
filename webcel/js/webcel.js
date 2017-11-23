var ages=[12,23,43,45,63,54,23,14,64,34];
var names=["Marko","Mirko","Slavko","Nikolica","Prikolica","Ana","Marija","Milica","Milena","Jelena"];
function zbir(nums) {
    var sum=0;
    for(var arrayIndex = 0; arrayIndex <ages.length; arrayIndex = arrayIndex + 1)
        sum=sum+ages[arrayIndex];
    return sum;
}

function main(){ 
    var rows=" ";
    for(var arrayIndex = 0; arrayIndex <ages.length; arrayIndex = arrayIndex + 1){ 
    var index=arrayIndex + 1;
    var name = names[arrayIndex]; 
    var age= ages[arrayIndex];
      var row="<tr><td>"+index+"</td><td>"+name+"</td>"+"<td>"+age+"</td></tr>"; 
        rows=rows+row;
        
    }
    document.getElementById("tbl").innerHTML=rows;
    var suma=zbir(ages);
    document.getElementById("zbr").innerHTML=suma;
   
    var pros=aver(ages);
   document.getElementById("prosek").innerHTML=pros;
    var maxim=Math.max.apply(null, ages);
    var minim=Math.min.apply(null, ages);
    document.getElementById("mali").innerHTML=minim;
    document.getElementById("veliki").innerHTML=maxim;
    
}
main(); 

function aver(numa) {
    var pro=0;
    for(var arrayIndex = 0; arrayIndex <ages.length; arrayIndex = arrayIndex + 1)
        pro=pro+ages[arrayIndex];
    var pro1=pro/ages.length;
    var pro2=pro1.toFixed(1);
    return pro2;
}

function addRow() {
    var x=document.getElementById("prvi");
    var y=document.getElementById("drugi");
    var xvalue=x.value;
    var yvalue=y.value;
    var yvalue1=Number(yvalue);
    names.push(xvalue);
    ages.push(yvalue1);
    main();
}
