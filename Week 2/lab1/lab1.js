// DO NOT CHANGE THE NAME OF THE FUNCTIONS OR NOTHING WILL WORK
// This function is going to be used a lot in this module: it swaps the values at elements i and j in an array
function swap(array, i, j) {
	var x = array[i];
	array[i] = array[j];
	array[j] = x;
	return array;
}

//var arr = [1, 2, 3, 4];
//swap(arr, 1, 3);
//console.log(arr);

var array = [1, 2, 3, 4];

// In this function we will flip an array so that the first element becomes the last, the second becomes the penultimate etc
function swapArray(array) {
	// First we will find the length of an array
	var n = array.length;
	// Now we will loop through the elements and apply the swap function
	for (var i = 0; i < Math.floor(n/2); i++) {
		// ADD CODE HERE THAT SWAPS ELEMENTS USING swap
        
        swap(array, i, n-1-i);
        
	}
	//RETURN SOMETHING
    
    return array;
}

//var arr = [1, 2, 3, 4];
//swapArray(arr);
//console.log(arr);

// In this function we will convert a decimal number to a binary array
function changeToBinary(n) {
	// first we create an empty array into which we will put our number
	var out = [];
	// CREATE A WHILE LOOP LIKE IN THE FLOWCHART
	// in the while loop push n mod 2 into the array and then divide n by 2
    while ( Math.floor(n/2) !== 0 )
        {
            out.push( n % 2 );
            n = Math.floor(n/2);
        }
    
    out.push( n % 2 );
    
	// swaps the values in the array
	swapArray(out);

	// RETURN SOMETHING HERE

    return out;
}

//console.log(changeToBinary(20));
//should print 10100

// HARDER: In this function you will take numbers n and m and generate
// an array of length m, which stores n in binary on the right and any remaining elements on the left store 0
function binLength(n, m) {
	//COMPLETE THIS FUNCTION
    
    var array = changeToBinary(n);
	var len = array.length;
	if (m < len) {
		return "Error"
	}
	while (len < m) {
	//another possible while loop condition is array.length < m
		array.unshift(0);
		//alternative approach instead of using array.unshift could be:
		//swapArray(array);
		//array.push(0);
		//swapArray(array);
		len++;
	}
	return array;

}

//console.log(binLength(5,6));






// DO NOT DELETE ANYTHING BELOW THIS LINE OR NOTHING WILL WORK

module.exports = {swap : swap, swapArray : swapArray, changeToBinary : changeToBinary, binLength : binLength}
