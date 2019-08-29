function startApp(){
      
function Question(question,choices,correctAnswerIndex){
    this.question= question;
    this.choices = choices;
    this.correctAnswerIndex= correctAnswerIndex;
    this.checkAnser = function(a){
        print("Opt slected "+a+" value set already"+correctAnswerIndex);
        if(a==this.correctAnswerIndex){
            print("Correct answer");
        }
        else {
            print("Incorrect anwser");
        }
    }
}   
    
var quiz= [];
var markedQuestions = new Set();

    
quiz.push(new Question("Who is PM of India?",["(0) Manmohan Singh","(1) Narendra Modi","(2) Shahrukh khan"],1));
quiz.push(new Question("Where is the capital of india?",["(0) Delhi","(1) Weteros","(2) Kings landing"],0));
quiz.push(new Question("First president of india?",["(0) Manmohan Singh","(1) J.Nehru ","(2) Rajendra Prasad"],1));
quiz.push(new Question("Where is Taj mahal?",["(0)New Delhi","(1) Agra","(2) Patna"],0));

var noOfQuestions= quiz.length;    
print("No of questins: "+noOfQuestions );
function getRandomQuestion(){   
    var randomIndex = createRandomNumber();
    print("Random index"+randomIndex);  
    return quiz[randomIndex];
}
    
var currenQuestion;
     
this.loadQuestion=function(){
        if(markedQuestions.size==noOfQuestions){
    
        document.getElementById("test").style.visibility='hidden';
                document.getElementById("submit").innerHTML='Thank You!';
            console.log("Test edned~");
            
            return;
        }
    
    console.log(markedQuestions);
    while(markedQuestions.size< noOfQuestions){
        print("Marked quesiton "+markedQuestions.size);
        currenQuestion = getRandomQuestion();
        if(markedQuestions.has(currenQuestion)  ){
            console.log("Herer");
            continue;
         
        }
        else{
            markedQuestions.add(currenQuestion);
            break;  
        }
       
    };

     document.getElementById("question").innerHTML=currenQuestion.question;
     document.getElementById("opt").innerHTML=currenQuestion.choices;
   
    
};     
    
this.checkAns = function(){
    console.log("checking answer");
    var optSelected = document.getElementById("ans").value;
    currenQuestion.checkAnser(optSelected);
    this.loadQuestion();
};
};
var app = new startApp();
app.loadQuestion();
