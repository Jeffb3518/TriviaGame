var count = 60;
var counter=setInterval(timer, 1000);

function timer() {
count=count-1;
	if (count <=0) {
		clearInterval(counter);
		alert("Time is up, You Lose!");
		return;
	}
document.getElementById("timer").innerHTML=count + " secs";
}

var answers = ["C", "A", "A", "C", "B"],
	total = answers.length

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); 
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; 
}

function getScore(){
  var score = 0;
  for (var i=0; i<total; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; 
  return score;
}

function returnScore(){
  alert("Correct Answers: "+ getScore());
}
