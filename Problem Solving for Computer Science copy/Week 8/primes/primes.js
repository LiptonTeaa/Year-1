//TASK ONE
//this should return the index of the first element with a value larger than item
function minBinarySearch(array, item) {
	var l = 0;
	var r = array.length - 1;
	if (r == 0) {
		return false;
	}
	// complete the following code, which has been commented out (and uncomment it)
	// put in something for MISSING1, MISSING2 and MISSING3
	
	while (r >= l) {
		var m = Math.floor((l + r) / 2);
		if ( array[m] == item ) {
			return m + 1;
		} else if ( array[m] < item ) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}
	
	return l;
}


// Test to check modified binary search (should print 2) 
//var array = [1, 2, 3, 4];
//console.log(minBinarySearch(array, 2));


//TASK TWO
//this function should return an array that stores all prime numbers from 2 up to (and possibly including) n
function genPrimes(n) {
	// this generates an array storing two-element arrays: each element stores an integer i and the Boolean true
	var array = [];
	for (var i = 2; i <= n; i++) {
		array.push([i,true]);
	}
    
    //console.log(array);
    
	// complete the code here to implement the Sieve of Eratosthenes
	// you need to implement steps 2 to 5 in the algorithm below
	// if the value stored in array is not prime then the associated Boolean should be changed to false
	// you should implement two nested loops

    for ( var i = 2; i <= Math.ceil(Math.sqrt(n)); i++)
        {
            if ( array[i-2][1] == true )
                {
                    for ( var j = 2; j <= n/i; j++)
                        {
                            array[(i*j) - 2][1] = false;
                        }
                }
        }

	// below here implements step 6 and does not need to be altered
	// this will loop over all elements in array and if the Boolean in each element is true, then it pushes that number to out
	// out will store all primes up to (and possibly including) n
	var out = [];
	for (var i = 0; i < array.length; i++){
		if (array[i][1]) {
			out.push(array[i][0]);
		}
	}
    
	return out;
}


// Test to check if array of prime numbers is being output ( should print [2, 3, 5, 7, 11] )
//console.log(genPrimes(12));


//TASK THREE
//this function should randomly generate a prime of length len where len should be an integer greater than 0
function randomPrime(len) {
	//complete the code to return a random prime number of length len, i.e. with len digits

	//this makes an array storing all the prime numbers with at most len digits
	var primes = genPrimes(10**(len)-1);
    
	//remember that the smallest number with len digits is 10**(len-1), and the largest number of length len is 10**(len)-1
    
    //function should call both minBinarySearch,genPrimes and Math.random (genPrimes was already called for us) 
    // We already have an array starting with 2 and ending with the largest possible number of len digits, factor in that we have to sort through the smallest possible number and return a random in that range
    
    var n = primes.length;
    
    var index = minBinarySearch(primes, 10**(len-1));
    
    var random = Math.floor(Math.random() * (n -1 - index + 1) ) + index;
        //Math.floor(Math.random() * primes[n - 1]) + primes[index];
    
    return primes[random];
    
    // The thing to note in both these solutions is that we're findind the index values of the range of numbers we have and returning a random index value to use to output from the primes array.
    
// This worked too btw but npm test didnt like it
//    var i = false;
//    
//    var random;
//    
//    while ( i == false )
//        {
//    
//            random = Math.floor(Math.random() * primes.length);
//            
//            if ( primes[random] > 10**(len-1) )
//                {
//                    i = true;
//                }
//            
//        }
//    
//    return random

}


// Test to check if prime number between 11 and 99 is returned
//console.log(randomPrime(2));


//TASK FOUR
//this function should return the two primes in an array if n is a semiprime, return the input n if it is prime, and false otherwise
function semiPrimes(n) {
	//complete this function
    
    var array = genPrimes(n);
    
    var out = [];
    
    var d1;
    var d2;
    
    //console.log(array);
    
    for ( var i = 0; i < array.length; i++)
        {
            if ( n/array[i] == 1 )
                {
                    return n; // Its just a prime number
                }
            else if ( n%array[i] == 0 )
                {
                    d1 = array[i];
                    d2 = n/array[i];
                    
                    out.push(d1,d2);
                    return out;
                } 
        }
    
    return false; 
}


// Testing the function, should return [2, 3], 5 and false corresponding to each function call
console.log(semiPrimes(6));
console.log(semiPrimes(5));
console.log(semiPrimes(8)); //isn't returning false sadly, the other two work


// DO NOT DELETE BELOW THIS LINE OR NOTHING WILL WORK

module.exports = {minBinarySearch : minBinarySearch, genPrimes : genPrimes, randomPrime : randomPrime, semiPrimes : semiPrimes}
