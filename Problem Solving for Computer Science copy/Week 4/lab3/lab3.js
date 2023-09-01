// DO NOT CHANGE THE NAME OF THE FUNCTIONS OR NOTHING WILL WORK

// this is the constructor for an implementation of a queue abstract data structure
function Queue() {
  this.arr = [];
  this.head = function() {
    return this.arr[0];
  };
  this.dequeue = function() {
    if (this.arr.length == 0) {
      return "Queue underflow!";
    } else {
      return this.arr.shift();
    }
  };
  this.enqueue = function(o) {
    this.arr.push(o);
  };
  this.isEmpty = function() {
      return this.arr.length == 0;
  };
}


//var queue = new Queue();
//queue.enqueue(1);
//queue.enqueue(2);


// this is a useful function that will help us visualise queues by turning them into a string that can be logged to the console
function visQueue(queue) {
  var str = "head --> ";
  if (queue.isEmpty()) {
    return "empty";
  }
  var extra = new Queue();
  while (!(queue.isEmpty())) {
    str = str + queue.head() + " ";
    extra.enqueue(queue.head());
    queue.dequeue();
  }
  str = str + "<-- tail"
  while (!(extra.isEmpty())) {
    queue.enqueue(extra.head());
    extra.dequeue();
  }
  return str;
}


//var queue = new Queue();
//queue.enqueue(1);
//queue.enqueue(2);
//queue.enqueue(3);
//console.log(visQueue(queue));


// In this section we will be cyclically permuting the elements of an array using a queue
// The following function should enqueue all the values in an array to a queue
function arrToQueue(array) {
  var queue = new Queue();
  var n = array.length;
  for (var i = 0; i < array.length; i++) {
    // complete this loop to enqueue the values in the array to the queue
      
  	queue.enqueue(array[i]);
   
  }
  return queue;
}


//var arr = [2, 4, 1, 3];
//var queue = arrToQueue(arr);
//console.log(visQueue(queue));


// This function should permute the queue by k elements to the left, using dequeue and enqueue
// Remember to enqueue the value stored at the head before dequeueing
function permuteQueue(queue, k) {
  // complete this function
    
    while (k > 0) {
        queue.enqueue(queue.head());
        queue.dequeue();
        k--;
    }

  return queue;
}


//var arr = [2, 4, 1, 3];
//var queue = arrToQueue(arr);
//console.log(visQueue(permuteQueue(queue, 1)));


function queueToArr(queue) {
  // complete this function
    
    var arr = [];
    while(!queue.isEmpty()){
        arr.push(queue.head());
        queue.dequeue();
    }
    return arr;
 
}


//var arr = [2, 4, 1, 3];
//var queue = arrToQueue(arr);
//var arr1 = queueToArr(queue);
//console.log(arr1);


var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function indexLetter(letter) {
  var l = 0;
  var r = 25;
  while (r >= l) {
    var m = Math.floor((l + r) / 2);
    if (letters[m] == letter) {
      return m;
    } else if (letters[m] < letter) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}

function encrypt(letter, k) {
  var index = indexLetter(letter);
  if (index == -1) {
    return " ";
  }
  var lett = arrToQueue(letters);
  lett = permuteQueue(lett,k);
  lett = queueToArr(lett);
  return lett[index];
}

// Complete this function which should encrypt the string message using the Caesar cipher
function encryptMessage(message, k) {
  var n = message.length;
  var string = "";
  // convert the message using encrypt, letter by letter and add it to string
  // you should loop over the number of characters in the string
    
    for (var i = 0; i < n; i++) {
        string += encrypt(message.charAt(i),k);
    }
    
  return string;
}


var message = "hello"
console.log(encryptMessage(message , 4));


// DO NOT DELETE ANYTHING BELOW THIS LINE OR NOTHING WILL WORK

module.exports = {arrToQueue : arrToQueue, permuteQueue : permuteQueue, queueToArr : queueToArr, encryptMessage : encryptMessage}
