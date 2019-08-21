


console.log("------------------------app1.js------------------------------ ")

var f ={};

f.callbackfun= function(iteratee,context){
    if(!context){
        console.log("Context is not defined");
        return iteratee;
    }
    return iteratee.bind(context); 
}

f.each= function(obj,iteratee,context){  
   
    console.log(obj);
    console.log(iteratee);

    var cb = this.callbackfun(iteratee,context);
    for(let i in obj){
         cb(obj[i],i,obj);
    }    
}

f.map=function(obj,iteratee,context){
var cb = this.callbackfun(iteratee,context);
var result = new Array(obj.length);

var cb = this.callbackfun(iteratee,context);
    for(let i in obj){
        result[i]=cb(obj[i],i,obj);
    }
    return result;
}


var contextObject={
    name:"name from context"
}

var p ={
    "name":"Dhiraj",
    "age":12,
    "city":"bangalore"
}
var array=[1,2,3,4];

f.each(array,function(x,key){ 
 //   console.log(this.name);
    console.log("key "+key+" value "+x);
},
contextObject);
console.log("Map -------------------------------");

var chagedItem = f.map(array,function(x){return x*2;});
console.log("changed data "+chagedItem);

console.log("find--------------");

f.find=function(obj,iteratee,context){
    for(var i in obj){
        if(iteratee(obj[i])===true){
            return obj[i];
        }
    }
}

var find = f.find(array,function(x){return x%13==0;});
console.log("found"+find);


console.log("Filter---------------------");



f.filter = function(obj,iteratee,context){
    var result = Array();
    for(var i  in obj){
        if( iteratee(obj[i])==true ){
            result.push(obj[i]);
        }
    }
    return result;
    
}

var filteredData = f.filter(array,function(x){return x%3==0;});

console.log("filter data "+filteredData);

console.log("-------------------------");
