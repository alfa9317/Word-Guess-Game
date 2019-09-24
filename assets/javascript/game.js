

var words = ["perro","gato","rinoceronte","zorrillo"];

var score = 0;
var randWord = "";
var answerArray = [];
reset();


var remainingLetters = randWord.length;

document.querySelector("#word").innerHTML = (answerArray.join(" "));


document.onkeyup = function(event) {
    
    var userInput = event.key.toLowerCase();

    for(var j=0;j<randWord.length;j++){
        if (randWord[j]===userInput){
            answerArray[j]=userInput;
            remainingLetters--;
        }
    }
    document.querySelector("#word").innerHTML = (" "+ answerArray.join(" "));
  };


  function reset(){
    randWord=words[Math.floor(Math.random() * words.length)];
    for(var i = 0; i < randWord.length;i++){
        answerArray[i] = "_";
    }
  }
  