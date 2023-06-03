let obj1= {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

if(Object.keys(obj1).length === Object.keys(obj2).length){
    var result="Equal";
    for(var i in obj1){
        if(obj1[i]!==obj2[i]){
        result="Not Equal";
        break;
        }
    }
    console.log(result);
}
else{
    console.log("Not Equal")
}
