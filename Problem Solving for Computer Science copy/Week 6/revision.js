// Question (a)
var one = 100 / 2;
var two = (100 / 2) === 50;
var three = "" + 100 / 2;
var four = [100,2];

// Question (b)
// true if number is perfectly divisible by three, false otherwise

// Question (c)

var a = 2;
a = a ** 3;
function smallerThan(n) {
	if (n < 10) { 
		return n;
	} else {
		return 10;
	}
}
a = smallerThan(a);
a++; 
smallerThan(a);

// Question (d) implement flowchart

// Question (e) abstract data structure

// Question (f) bubble sort by hand

// Question (g) 

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
}
queue = new Queue(); 
queue.enqueue(10); 
queue.enqueue(5); 

// Question (h)

function logBase2(n) {
	return (Math.log(n) / Math.log(2));
}

function logArray(input) {
	var array = [];
	for (var i = 0; i < input.length; i++) {
		//MISSING 
	}
	return array;
}

function powers(n) {
	var array = [];
	for (var i = n; i >= 0; i--) {
		array[i] = n-i; 
	}
	return expArray(array); 
}
