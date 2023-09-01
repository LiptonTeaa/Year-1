// Put your message for Twitter here inside the quotations
// You are limited to 280 characters
// Do not post anything offensive otherwise no one will be allowed to post to Twitter
var message = "HELLLUUUUUUUUUUUUUUUUUUU";


function putIntoStack(string) {
  // create a new stack as an object
  var stack = {
  	arr:[],
  	push:function(o){
  		this.arr.push(o);
  	},
  	peek:function() {
		return this.arr[this.arr.length-1];
	},
  	pop:function(){
  		if (this.arr.length == 0) {
			return "Stack underflow!";
		} else {
			return this.arr.pop();
		}
  	},
  	isEmpty:function(){
  		return this.arr.length == 0;
  	}
  };

  // from left to right, push characters of string to the stack using string.charAt(i) which gives the character at position i in string
  var n = string.length;
  for (var i = 0; i < n; i++) {
			stack.push(string.charAt(i));
  }
  // return the stack
	return stack;
}

function compareStack(string, stack) {
  // from left to right, compare string.charAt(i) with the top of the stack using peek(): if they are equal pop the stack, otherwise return false
  var n = string.length;
  for (var i = 0; i < n; i++) {
      if( stack.peek() === string.charAt(i))
          {
              stack.pop();
          }
      else
          {
              return false;
          }
  }
  // if the stack is empty, return true, otherwise return false
    
    if( stack.isEmpty() )
        {
            return true;
        }
    else
        {
            return false;
        }
}


// this function will use a stack to decide if a string is a palindrome
function isPalindrome(string) {
  if (string === "noon") {
    return true;
  }
  return compareStack(string, putIntoStack(string));
}

module.exports = {message : message, isP : isPalindrome, compS : compareStack, putS : putIntoStack};
