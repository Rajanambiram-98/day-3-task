var req= new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
var res=JSON.parse(req.response);

for(var i in res){
    console.log(res[i].name,res[i].region,res[i].subregion,res[i].population);
}
}