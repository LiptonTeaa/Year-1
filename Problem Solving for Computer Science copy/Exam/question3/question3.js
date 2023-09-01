function Stack() {
	this.arr = [];
	this.push = function(item) {
		if (typeof item === "number") {
			this.arr.unshift(item);      //unshift adds one or more elements at the beginning of the array
		} else {
			return "Not a number!"
		}
	}
	this.pop = function(item) {
		if (this.arr.length == 0) {
			return "Stack underflow";
		}
		return this.arr.shift();
	}
	this.peek = function() {
		return this.arr[0]; //MISSING1
	}
	this.isEmpty = function() {
		if ( this.arr.length == 0 ) { //MISSING2
			return true;
		}
		return false;
	}
}

function stacksEqual(stack1, stack2) { 
    
    if (stack1.arr.length !== stack2.arr.length)
        {
            return false;
        }
//    console.log(stack1.arr);
//    console.log(stack2.arr);
    
	while (!stack1.isEmpty() && !stack2.isEmpty()) {
		if (stack1.peek() !== stack2.peek()) {
			return false; 
		}
		stack1.pop();
		stack2.pop();
//      console.log(stack1.peek());
//      console.log(stack2.peek());
	}
	return stack1.isEmpty() && stack2.isEmpty();
}



// All the things commented out are things I was using to test

//var arrayS = [0,1,3,3,4,5,5,6,7];
//var arrayT = [0,1,3,3,4,5,5,6,7]; //[0,3,3,6,1,5,7,5,4];
//
//function newStack(array)
//{
//    var f = new Stack();
//    
//    for (var i = 0; i<array.length; i++)
//        {
//            f.push(array[i]);
//        }
//    
//    console.log(f);
//    
//    var temp = f.peek();
//    var temp = f.isEmpty();
//    var temp = f.pop();
//
//    return temp;
//    return f;
//}
//
//console.log(newStack(arrayS));
//
//var s1 = newStack(arrayT);
//var s2 = newStack(arrayS);
//
//
//console.log(stacksEqual(s1, s2));

