//document.getElementById("demo").innerHTML = Math.random();
/*
var arr1 = ["Blue", "Green","Red","Orange" ,"Violet","Indigo","Yellow"];
var arr2 = ["th","nd","st","rd"];

//var name = readline();



//const name = require("readline");
console.log(name);

for(var i=0; i<=arr1.length-1; i++ ){
    if(i == 0){
        console.log(i+1+""+arr2[2]+" choice is "+arr1[i]);
    }else if(i == 1){
        console.log(i+1+""+arr2[1]+" choice is "+arr1[i]);
    }else if(i == 2){
        console.log(i+1+""+arr2[3]+" choice is "+arr1[i]);
    }else{
        console.log(i+1+""+arr2[0]+" choice is "+arr1[i]);
    }
}


*/

process.stdin.on("data",function(data){
    console.log(data.toString());
})
var name = Date();
console.log(name);