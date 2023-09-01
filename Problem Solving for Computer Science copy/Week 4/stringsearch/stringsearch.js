
var fs = require("fs");
var text = fs.readFileSync("./pi.txt").toString('utf-8');


function stringCompare(string, text, startingIndex) {
  var n = string.length;
  if (startingIndex + n - 1 > text.length) {
    return false;
  }
  for (var i = 0; i < n; i++) {
    // compare characters in a string here
      
      if (string.charAt[i] !== text.charAt(startingIndex + i))
          {
              return false;
          }
      
  }
  return true;
}

//var text = "hello";
//var string = "hello";
//console.log(stringCompare)

function searchString(string, text) {
  var n = string.length;
  var t = text.length;
  if (t < n) {
    return false;
  }
  // search text for the first character in string
  for (var i = 0; i < t; i++) {
  	// put code here
      
      if (text.charAt(i) === string.charAt(0))
          {
              if (stringCompare(string,text,i))
                  {
                      return i;
                  }
          }
      
  }
  return -1;
}

//var string = "hi"
//var text = "I had alot of coffee today and now I feel high";
//console.log(searchString(string,text));

// My thing is broke, it always outputs -1

// put your birthday in the format of DDMM below here
//var yourBirthday = "3.142";
//
//console.log(searchString(yourBirthday, text));

 var readline = require("readline");

 var rl = readline.createInterface({
 	input: process.stdin,
 	output: process.stdout
 });

rl.question("What's your birthday?", function(answer)
           {
    console.log("The answer is" + searchString(answer,text));
    rl.close();
});
