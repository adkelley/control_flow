function promptName() {
  var fname = prompt("What is your first name?");
  alert(fname);
  var response = prompt("Have we met before?");
  //(response === "yes" || response === "Yes") ? alert("Nice to meet you")  : alert("I see");
  (response.match(/yes|Yes/)) ? alert("Nice to meet you") : alert("I see");
}

function farenheitCelsius() {
  var f = prompt("Farenheit Temperature?");
  alert((f-32) - 5/9);
}


function has3Friends() {
  var friends = [];
  var i = 1;
  while (friends.length < 3) {
    friends.push(prompt("Name a friend " + i + ": "));
  }
  alert("Your friends are: " + friends);
}


function vowelsWord() {
  alert("Vowels: " + prompt("Type a word").match(/[aeiou]/g));
}


function solveRiddle() {
  var solved;
  var i = 1, sum;
  var sArr, nArr = [];
  do {
    i += 1;
    if (i % 2 == 0 &&
        i % 3 == 0 &&
        i.toString().match(/2$/)) {
      sArr = i.toString().split('');
      for (var j=0; j<sArr.length; j++) nArr.push(parseInt(sArr[j]));
      sum = nArr.reduce(function(pValue, cValue, index, array) {
        return pValue + cValue;
      });
      solved = (sum === 9);
    }
  } while (!solved && i <= 100)
  alert("The number is: " + i);
}


function guessNumber() {
  var answer = Math.floor(Math.random() * 100);
  var guess;
  do {
    guess = Math.floor(parseInt(prompt("Guess a number between 1 & 100")));
    if (guess < answer)
      alert("Guess higher")
    else if (guess > answer)
      alert("Guess lower")
    else
      alert("Right on, you guessed it");
  } while (guess !== answer);
    
}

/*
function friendsRandom() {
}
*/


window.onload = function() {
  alert("Click on any element");
  var p1 = document.getElementById("p1");
  p1.onclick = promptName;
  var p2 = document.getElementById("p2");
  p2.onclick = farenheitCelsius;
  var p3 = document.getElementById("p3");
  p3.onclick = has3Friends;
  var p4 = document.getElementById("p4");
  p4.onclick = vowelsWord;
  var p5 = document.getElementById("p5");
  p5.onclick = solveRiddle;
  var p6 = document.getElementById("p6");
  p6.onclick = guessNumber;
/*
  var p7 = document.getElementById("p7");
  p7.onclick = friendsRandom;
*/
};
