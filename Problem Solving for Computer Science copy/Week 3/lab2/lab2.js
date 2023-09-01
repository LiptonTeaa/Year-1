// This function will generate an array where the total number of elements is given by the argument movies
// Each element is a rating between 0 and 10 of a movie
// Try it for useful by using something like console.log(user(10)) - it should print an array of 10 elements to the console
// Do not alter this function!
function user(movies) {
	var arr = [];
	for (var i = 0; i < movies; i++) {
		arr.push(Math.round(10 * Math.random()));
	}
	return arr;
}

//console.log(user(10));

// TASK ONE

// When completed, this function should generate a 2d array where each row is a user's rating of all the movies - you will use the function user to generate this row
// The number of movies is the argument movies and the number of users is the argument users
// You need to complete the for loop
// Remember: Use the function user(movies)
function genUsers(users, movies) {
	var arr = [];
	for (var i = 0; i < users; i++) {
		//PUT SOMETHING HERE
        
        arr.push(user(movies).slice());
        
	}
	return arr;
}

//console.log(visArray(genUsers(5,4)));


// This complete function might be a useful aid to you to visualise the arrays made here as tables
// Try it for yourself by coding up console.log(visArray(genUsers(10,10))) - you should see a table of 10 rows and 10 columns
function visArray(array) {
  var viz = "";
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
    	if (array[i][j] === " ") {
    		viz = viz + "|  " + array[i][j] + " ";
    	} else if (array[i][j] === 10) {
    		viz = viz + "| " + array[i][j] + " ";
    	} else {
    		viz = viz + "|  " + array[i][j] + " ";
    	}
    }
    viz = viz + "| " + "\n";
  }
  return viz;
}

// TASK TWO

// When completed, this function should compute the average of all the ratings for each movie and return it is an array called averages
// Go along each column and sum up all the numbers in the column and divide by the number of users, then push this number to the array averages
// Remember to return averages
function findAverage(array) {
	if (array.length <= 0) {
		return "Error"
	}
	var averages = [];
	// this variable stores the number of rows
	var numRows = array.length;
	// this variable stores the number of columns
	var numCols = array[0].length;
	// this loop is going to traverse the columns
	for (var i = 0; i < numCols; i++) {
		// this variable will store the sum of all the numbers in each column
		var sum = 0;
		// you need to loop over the rows for each column, add up the numbers and divide by the number of rows
        
        for (var j = 0; j < numRows; j++)
        {
			sum = sum + array[j][i];
		}
		averages[i] = sum/numRows;

	}
    
    return averages;
}

//var arr1 = [1, 2, 3, 4];
//var arr2 = [2, 3, 4, 5];
//var array = [arr1.slice(), arr2.slice()]; 
//console.log(findAverage(array));


// From here onwards we will be considering incomplete arrays of user preferences - not all users have watched all the movies

// This function will generate an array where the number of rows and columns is users and movies respectively
// If a user has not seen a movie then the empty string " " will be stored in the element of the array
function genIncompleteUsers(users, movies) {
	function incomplete(movies) {
		var arr = [];
		for (var i = 0; i < movies; i++) {
			var choice = Math.round(Math.random());
			if (choice == 0) {
				arr.push(" ");
			} else {
				arr.push(Math.round(10 * Math.random()));
			}
		}
		return arr;
	}
	var arr = [];
	for (var i = 0; i < users; i++) {
		arr.push(incomplete(movies));
	}
	return arr;
}

//console.log(genIncompleteUsers(10,10));

// When completed this function will return true if all users have given all movies a rating, and false otherwise
// In other words, if any of the elements of array are equal to " " then the function returns false, and true if none of the elements are equal to " "
function isComplete(array) {
	var numRows = array.length;
	var numCols = array[0].length;
	// loop over elements and return false if any of them are equal to " "
    
    for (var i = 0; i < numRows; i++) {
		for (var j = 0; j < numCols; j++) {
			if (array[i][j] === " "){
				return false;
			}
		}
	}
    
	return true;
}

// HARD: In this function you need to compute the averages of the numbers in each column, ignoring the strings " "
function findIncompleteAverages(array) {
	// YOU NEED TO PUT YOUR CODE HERE
    
    if (isComplete(array)) {
		return findAverage(array);
	}
	if (array.length <= 0) {
		return "Error"
	}
	var averages = [];
	// this variable stores the number of rows
	var numRows = array.length;
	// this variable stores the number of columns
	var numCols = array[0].length;
	// this loop is going to traverse the columns
	for (var i = 0; i < numCols; i++) {
		// this variable will store the sum of all the numbers in each column
		var sum = 0;
		var count = 0;
		// you need to loop over the rows for each column, add up the numbers and divide by the number of rows
		for (var j = 0; j < numRows; j++) {
			if (array[j][i] !== " ") {
				sum = sum + array[j][i];
				count++;
			}
		}
		averages[i] = sum/count;
	}
	return averages;
   
}

var arr1 = [1, " ", 3, 4, " "];
var arr2 = [" ", 2, " ", 5, " "];
var array = [arr1.slice(), arr2.slice()]; 
console.log(findIncompleteAverages(array));

// DO NOT ALTER ANYTHING BELOW HERE OR THE CODE WILL NOT WORK

module.exports = {user : user, genUsers : genUsers, findAverage : findAverage, genIncompleteUsers : genIncompleteUsers, isComplete : isComplete, findIncompleteAverages: findIncompleteAverages}
