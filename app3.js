






var p ={
    name:"Dhiraj",
    age:21,
    city:"Patna"
}

var p1 ={
    name:"Dhiraj",
    age:22,
    city:"Patna"
}


function findWhere(objs,key,isListResponseReuired){
   
    console.log(key);
    var result=[];
    console.log(objs[0]);
    
for(var obj of objs){
    console.log("Obj"+obj);
     var allPropMatched = true;
    for(var prop in key){  
        if(obj.hasOwnProperty(prop) && obj[prop]===key[prop]){
            console.log("OK");
        }
        else{
            allPropMatched=false;
            break;
        }
        
    }    
    if(allPropMatched){
        result.push(obj);
        
    }
}
    if(isListResponseReuired){
        return result;
    }
    else{
    return result[0];
}
}




console.log(findWhere([p,p1],{name:"Dhir",age:21}));


function where(objs,key){
return  this.findWhere(objs,key,true);
}

console.log(where([p,p1],{name:"Dhiraj"}));








