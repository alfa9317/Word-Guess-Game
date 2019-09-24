

var words = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot"];

var score = 0;
var maxGuesses = 12;
var randWord = "";
var answerArray = [];
var guessesArray = [];
var win=0;
var lose=0;
reset();
var remainingLetters = randWord.length;

document.querySelector("#word").innerHTML = (answerArray.join(" "));
document.querySelector("#guessesRemaining").innerHTML = (" "+maxGuesses);


document.onkeyup = function(event) {
    
    var userInput = event.key.toLowerCase();
    var cont=0;
    var cont2=0;

    for(var j=0;j<randWord.length;j++){
        if (randWord[j]===userInput){
            answerArray[j]=userInput;
            remainingLetters--;
            
        } else{
            cont++;
        }
    }

    if(cont===randWord.length){
        if(guessesArray.length!==0){
            for(var z=0;z<guessesArray.length;z++){
                if(guessesArray[z]!==userInput){
                    cont2++;
                }
            }
            if(cont2===guessesArray.length){
                guessesArray.push(userInput);
                maxGuesses--;
            }
        } else if (guessesArray.length===0){
            guessesArray.push(userInput);
            maxGuesses--;
        }
    }
    
    if(remainingLetters<1){
        reset();
        win++;
    }else if(maxGuesses<1){
        reset();
        lose++;
    }

    document.querySelector("#word").innerHTML = (" "+ answerArray.join(" "));
    document.querySelector("#usedLetters").innerHTML = (" "+guessesArray.join(" "));
    document.querySelector("#guessesRemaining").innerHTML = (" "+maxGuesses);
    document.querySelector("#win").innerHTML = (" "+win);
    document.querySelector("#failure").innerHTML = (" "+lose);

  };


  function reset(){
    guessesArray = [];
    answerArray = [];
    maxGuesses = 12;
    randWord=words[Math.floor(Math.random() * words.length)];
    for(var i = 0; i < randWord.length;i++){
        answerArray[i] = "_";
    }
    remainingLetters = randWord.length;
  }
  

  /*if(guessesArray===null){
                guessesArray.push(userInput);
            } else {
                for(var z = 0;z<guessesArray.length;z++){
                    if(guessesArray[i]!==userInput){
                        guessesArray.push(userInput);
                        break;
                    }
                }




                if(guessesArray!==null){
        for(var z=0;z<guessesArray.length;z++){
            if(guessesArray[z]!==userInput){
                guessesArray.push(userInput);
                maxGuesses--;
                break;
            }
        }
    } else{
        guessesArray.push(userInput);
    }
            }*/

