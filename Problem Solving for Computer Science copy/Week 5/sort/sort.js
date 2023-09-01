function genRandomArray(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr[i] = Math.round( 10 * Math.random());
	}
	return arr;
}

function swap(array,index1,index2) {
	var saveElement = array[index1];
	array[index1] = array[index2];
	array[index2] = saveElement;
	return array;
}

function bubbleSort(array) {

// this should return a sorted array
    
    // But beware, it doesn't always sort an array completely
    
    var n = array.length;
    var count;
    
    for ( var i = 1; i < n; i++)
        {
            for ( var j = 0; j < n - 1; j++)
                {
                    count = 0;
                    if ( array [j + 1] <  array [j])
                        {
                            swap(array, j , j +1);
                            count++;
                        }
                    console.log(array);
                }
            if ( count === 0 )
                {
                    return array;
                }
        }

    return array;
}

//var arr = [2,1,3,4,5,6];
//console.log(bubbleSort(arr));

function insertionSort(array) {

// this should return a sorted array
    
    var n = array.length;
    
    for ( var i = 1; i < n; i++)
        {
            var j = i;
            
            while ( j > 0 && array[j - 1] > array[j])
                {
                    swap(array, j, j-1);
                    console.log(array);
                    j--;
                }
        }

    return array;
}

var arr = genRandomArray(6);
console.log(arr);
//console.log(bubbleSort(arr));
console.log(insertionSort(arr));
