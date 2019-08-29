


function createRandomNumber(){
    var randomIndex=9999    ;
    while(randomIndex>4){
        console.log("Generating random  number "+randomIndex+" "+Math.random());
        randomIndex =(10)* Math.random();
    }
    return parseInt(randomIndex);
}

function print(a){
    console.log(a);
}



