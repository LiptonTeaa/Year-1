
function swap(array,i,j) {
	var store = array[i];
	array[i] = array[j];
	array[j] = store;
	return array;
}

function recSort(array, r) {
	if (r === array.length - 1) {
        //((r === array . length - 1) || (count === 0)){ // I was having trouble getting count to reliably work
		return array;
	}
    //var count = 0;
	for (var j = array.length - 1; j > r - 1; j--) {
		if (array[j] < array[j-1]){
			swap(array,j,j-1);
            //count++;
		}
        //console.log(count);
	}
	return recSort(array, r+1); //MISSING;
}


// All the commented things are things I was using to test >>


//var arrayT = [0,3,3,6,1,5,7,5,4];

//function swap (array ,i,j) {
//     var store = array [i];
//     array [i] = array [j];
//     array [j] = store ;
//     return array ;
// }
//
// function sort ( array ) {
//     var n = array . length ;
//     for (var i = 1; i < n; i++) {
//     var count = 0;
//     for (var j = n - 1; j > i - 1; j --) {
//     if ( array [j] < array [j -1]) {
//     swap (array ,j,j -1);
//     count ++;
//         console.log( arrayT); // for testing
//     }
//     }
//     if ( count === 0) {
//     return array ;
//     }
//     }
//     return array ;
// }
//
//console.log( sort(arrayT) + "this should be the final");