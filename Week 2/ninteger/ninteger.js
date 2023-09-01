// Put your message for Twitter here inside the quotations
// You are limited to 280 characters
// Do not post anything offensive otherwise no one will be allowed to post to Twitter
var message = " To be or not to be";

//Task One: complete the function solutionMethodTwo using the flowchart
function solutionMethodTwo(n) {
  for (var i = 0; i * i <= n; i++) {
    //CHECK DECISION AND THEN POSSIBLY RETURN SOMETHING
      if(i === n){
          return true;
      }
  }
  //RETURN SOMETHING
    return false;
}

//This is the function for the first solution method
//It calls the function heron from below
function solutionMethodOne(n) {
  if (n == 0) {
    return 0;
  }
  var g = heron(n);
  if (g * g == n) {
    return true;
  }
  return false;
}

// Task Two: complete the function heron(y)
// this is the function to compute the square root of y to the nearest integer
// assume that y is an integer that is not equal to 0
function heron(y) {
  var g = y;
  // add code here
    while(Math.round(y/g) !== Math.round(g)){
        m = (1/2)*(y/g+ g);
        g = m;
    }
  return Math.round(g);
}


module.exports = {message : message, slnOne : solutionMethodOne, slnTwo : solutionMethodTwo, heron : heron};
