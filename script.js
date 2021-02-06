console.log("hello");

let myTitle = document.getElementById("title");
let myButton = document.getElementById ("mybutton");
let myText = document.getElementById("text");











var start,middle,end;
start = ["musician", "cook", "artist", "doctor", "child", "actor", "cheerleader", "dentist"];
middle = ["practised", "cooked", "drew", "danced", "acted", "performed", "sang", "wrote", "played", "complained"];
end = ["music", "pasta", "lobster", "away", "drama", "a show", "beautfully", "dramatically", "rigorously"];

function sentence() {
    var number1 = Math.floor(Math.random() * 8);
    var number2 = Math.floor(Math.random() * 10);
    var number3 = Math.floor(Math.random() * 9);

    var content = "The " + start[number1] + " " + middle[number2] + " " + end[number3] + ".";
  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};

sentence();

myButton.style.color= "purple";
myButton.style.fontFamily= "arial"



