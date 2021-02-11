function Question(text,choices,answer)
{
    
    this.text=text;
    this.choices=choices;
    this.answer=answer;
    
}


Question.prototype.checkAnswer=function(answer){
    
    
    return this.answer===answer;
    //burada this.answer diyerek Question üzerinden üretilen bir nesnenin answer kısmıyla dışarıdan gelen(parametre) ile eşit mi kontrolü.
    
}


function Quiz(questions){
    
    
    this.questions=questions;
    this.score=0;
    this.questionsIndex=0;
}


Quiz.prototype.getQuestion=function(){
    
    return this.questions[this.questionsIndex];
    
}

Quiz.prototype.isFinish=function(){
    
    return this.questions.length===this.questionsIndex;
}

Quiz.prototype.Guess=function(answer){
    var question=this.getQuestion();
    if(question.checkAnswer(answer)){
        
        this.score++;
    }
    this.questionsIndex++;
}



var q1=new Question("what's the best programming?",["C#","JavaScript","Pyhton","Asp.net"],"JavaScript");

var q2=new Question("what's the most popular programming language?",["C#","Pyhton","JavaScript","C++"],"JavaScript");


var q3=new Question("what's the best modern programming language?",["Pyhton","C#","Asp.net","JavaScript"],"JavaScript");

var q4=new Question("what's the most used programming language for machine learning",["JavaScript","C++","R","Python"],"Python");

var questions=[q1,q2,q3,q4];

var quiz=new Quiz(questions);

loadQuestion();

function loadQuestion(){
    
    if(quiz.isFinish()){
        showScore();
        
    }else
        {
            var question=quiz.getQuestion();
            var choices=question.choices;
            document.querySelector("#question").textContent=question.text;
            for(var i=0;i<choices.length;i++){
                var element=document.querySelector("#choice"+i);
                element.innerHTML=choices[i];
                
                guess("btn"+i,choices[i]);
                
                
            }
            
            showProgress();
        }
    
}

function guess(id,guess){
    var btn=document.getElementById(id);
    btn.onclick=function(){
        quiz.Guess(guess);
        loadQuestion();
        
    }
    
}

function showScore(){
    
    var html=`<h2>Score</h2> <h4>${quiz.score}</h4>`;
    
    document.querySelector(".card-body").innerHTML=html;
    
}
function showProgress(){
    
    var totalquestion=quiz.questions.length;
    var questionnumber=quiz.questionsIndex+1;
    
    document.querySelector("#progress").innerHTML="Question"+questionnumber+" of "+totalquestion;
    
    
    
}