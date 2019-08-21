






var p ={
name:"Dhiraj",
age:12,
address:{
city:"patna",
    pincode:90002
}    
};


console.log(p);



_.each(p,function(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
                        
                        });

console.log("++++++++++++++++++++++++++")

var b  = _.map([1,2,3,4],function(obj){
               return obj*2;
               });
console.log("Map "+b);
var c =_.find(p,function(obj){
    return obj%13==0;
})

console.log("Underscore find"+c);


console.log(_.findWhere([p,p],{city:"patna"}));

var input = "abc";
console.log(input.toUpperCase());

window["" ]();