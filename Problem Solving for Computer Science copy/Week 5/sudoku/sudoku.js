//TASK ONE

function makeRows(row) {
	var puzzle = [];
    
    for( var i = 0; i < 4; i++) 
        {
            puzzle[i] = row.slice(); // Pushing the row array 4 times to puzzle 
        }
    
    return puzzle;
    //console.log(puzzle);
}

// Check for function makeRows
//array = [ 1, 2, 3, 4];
//makeRows(array);

// Test for seeing if a 2D arrray is being built 
//var row = [1, 2, 3, 4];
//console.log(makeRows(row));


//TASK TWO
// this is the constructor of the queue data structure
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

function permuteRow(row, p) {
    
    // Array to queue 
    var queue = new Queue();
    var n = row.length;
    
    for (var i = 0; i < row.length; i++) {
        // Loop to enqueue the values in the array to the queue
        queue.enqueue(row[i]);
    }
        
    // Permutating the queue by p numbers to the left
    while (p > 0) {
        queue.enqueue(queue.head());
        queue.dequeue();
        p--;
    }
    
    // Queue to array
    var arr = [];
    while(!queue.isEmpty()){
        arr.push(queue.head());
        queue.dequeue();
    }

    // Return permutated array
    return arr;

}

// Test to see if a single 1D array is being permutated by p num to the left
//var row = [1, 2, 3, 4];
//console.log(permuteRow(row, 2));


function permutePuzzle(puzzle, p, q, r) {
	var perms = [p,q,r];
    for (var i=0; i<3; i++){
        puzzle[i + 1] = permuteRow(puzzle[i + 1], perms[i]);
    }
    return puzzle;
}

// Test to check if permutation for a 2D array works 
//var row = [1, 2, 3, 4];
//var puzzle = makeRows(row);
//console.log(permutePuzzle(puzzle , 1, 2, 3));

//TASK THREE

function linearSearch(array, item) {
	var n = array.length;
	for (var i = 0; i < n; i++) {
		if (array[i] == item) {
			return true;
		}
 	}
	return false;
}

function checkColumn(puzzle, j) {
	//first make an array out of the values stored in column j
    var array = [];
    var flag = true;
    var flag1 = true;
    var flag2 = true;
    var flag3 = true;
    
    for( var i = 0; i < 4; i++)
        {
            array[i] = puzzle[i][j];
        }
    
    // To check if it is even grabbing the right columns
    //console.log(array);

	//call linearSearch on the array of column values for all values of k from 1 to 4
    
    // There is probably a better way than calling this 4 times
    flag = linearSearch( array, 1);
    flag1 = linearSearch( array, 2);
    flag2 = linearSearch( array, 3);
    flag3 = linearSearch( array, 4);
    
    if( flag && flag1 && flag2 && flag3 == true)
        {
            return true;
        }
    else
        {
            return false;
        }
}


// Test to see if every number from 1 to 4 appears in a particular row
//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
//console.log(checkColumn(puzzle , 1));
//puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [2, 3, 4, 1], [4, 1, 2, 3]];
//console.log(checkColumn(puzzle , 2));


//TASK FOUR

function colCheck(puzzle) {
    
    for( var i = 0; i < 4; i++)
        {
            // Output false unless every column in the 2D array outputs true from checkColun
            if(checkColumn( puzzle, i) == false){
                return false;
            }
        }
    
    return true;
}


// Test to see if it is correctly sorting through a 2D array
//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
//console.log(colCheck(puzzle));
//puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [2, 3, 4, 1], [4, 1, 2, 3]];
//console.log(colCheck(puzzle));


//TASK FIVE

function makeGrid(puzzle, row1, row2, col1, col2) {
	//this copies all elements in a grid from co-ordinates (row1, col1) to (row2,col2) to an array
	var array = [];
	for (var i = row1; i <= row2; i++) {
		for (var j = col1; j <= col2; j++) {
			array.push(puzzle[i][j]);
		}
	}
	return array;
}


// Test to see if it returns the right 1D array for a sub grid
//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
//console.log(makeGrid(puzzle , 0, 1, 2, 3));


function checkGrid(puzzle, row1, row2, col1, col2) {
    
    var array = [];
    
    array = makeGrid(puzzle, row1, row2, col1, col2);
    
    for( var i = 1; i < 5; i++)
    {
    if (linearSearch(array,i) == false)
        {
            return false;
        }
    }
    return true;

}


// Test to check if all num 1 to 4 are in a subgrid 
//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
//console.log(checkGrid(puzzle , 0, 1, 2, 3));
//puzzle = [[1, 2, 3, 4], [3, 4, 1, 2], [4, 1, 2, 3], [4, 1, 2, 3]];
//console.log(checkGrid(puzzle , 0, 1, 0, 1));


//TASK SIX

function checkGrids(puzzle) {

    if
    ( checkGrid( puzzle, 0, 1, 0, 1) &&
      checkGrid( puzzle, 0, 1, 2, 3) && 
      checkGrid( puzzle, 2, 3, 0, 1) && 
      checkGrid( puzzle, 2, 3, 2, 3) == true
    )
        {
            return true;
        }

    return false;
}
// I could have done this in a more dynamic way but since I know the grid size is constant, this works


// Test to see if all sub grids are sorted to contain num 1 to 4 for the 2D array
//var puzzle = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
//console.log(checkGrids(puzzle));
//puzzle = [[1, 2, 3, 4], [3, 4, 1, 2], [4, 1, 2, 3], [2, 3, 4, 1],];
//console.log(checkGrids(puzzle)); 


//TASK SEVEN

function makeSolution(row) {
    
    //functions to call checkGrids, colCheck, permutePuzzle, and makeRows
    
    var string = 'puzzle not solved'
    var puzzle = [];
    
    puzzle = makeRows(row); // Makes row a 2D array
    
    permutePuzzle(puzzle, 2, 1, 3); // Makes it into a puzzle, permutated to make the solved puzzle
    
    //console.log(colCheck(puzzle)); // Checks that columns are sorted
    //console.log(checkGrids(puzzle)); // Checks that grids are sorted 
    
    if ( colCheck(puzzle) && checkGrids(puzzle) == true )
    {
        return puzzle;
    }
    
    return string;

}


// Tests to see if returned array is a sorted puzzle (the top row is equal to row)
//var row = [1, 2, 3, 4];
//console.log(makeSolution(row));


// TASK EIGHT

// a function to randomly select n (row,column) entries of a 2d array
function entriesToDel(n) {
		var array = [];
//        var dummy = [];    
//        var k = [];
    
		for (var i = 0; i < n; i++) {
			var row = Math.round(3*Math.random());
			var col = Math.round(3*Math.random());
            
//            dummy.push(string(row + col));
//            if(linearSearch(dummy, String(row + col)) == false){}
//            k = dummy.push([row, col]);
//			if ( linearSearch(array,k) == false)
//                {
                  array.push([row,col]);
//                }
            
		}
    //console.log(array); // To look at the coordinated being produced
		return array;
}


// I can only think of checking a new coordinate against old coordinates in the array and pushing it if it is unique or creating a new one if it is not,  but i cant think of a way to implement it. maybe a nested loop or converting to a string and putting in an array to compare?

// Test to check if the correct number of distinct coordinates are being produced
//console.log(entriesToDel(5));


function genPuzzle(row, n) {
	if (n >= 16) {
		return "Error! Too many blank spaces!";
	}
	var solution = makeSolution(row);
	var blanks = entriesToDel(n);
	for (var i = 0; i < blanks.length; i++) {
		solution[blanks[i][0]][blanks[i][1]] = " ";
	}
	return solution;
}


// Test for checking the unsolved puzzle
//var row = [1, 2, 3, 4];
//console.log( genPuzzle( row, 5));


// The following function is used to visualise the puzzles

function visPuzzle(puzzle) {
	var viz = "";

	for (var i = 0; i < puzzle.length; i++) {
		for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "----";
		}
		viz = viz + "-\n";
		for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "| " + puzzle[i][j] + " ";
		}
		viz = viz + "| " + "\n";
	}
	for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "----";
	}
	viz = viz + "-";

	return viz;
}

// Test for visualising the puzzle
//var row = [1, 2, 3, 4];
//var puzzle = makeRows(row);
//console.log(visPuzzle(puzzle));


// DO NOT DELETE BELOW THIS LINE OR NOTHING WILL WORK AND YOU MAY GET NO MARKS

module.exports = {makeRows : makeRows, makeSolution : makeSolution, genPuzzle : genPuzzle, checkGrid : checkGrid, checkGrids : checkGrids, colCheck : colCheck, checkColumn : checkColumn, permuteRow : permuteRow, permutePuzzle : permutePuzzle};