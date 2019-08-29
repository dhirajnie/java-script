

(function App(){

    function Person(name,age){
        this.name=name;
        this.age=age;
        
    }
    Person.prototype.doubleName=function(){
        
        this.name=this.name+this.name;
        return this;
    }
    Person.prototype.doubleAge= function(){
        this.age= 2* this.age;
        return this;
    }
    
    var p = new Person('DHiraj',12);
    p.doubleName().doubleAge();
    console.log(p);

}());