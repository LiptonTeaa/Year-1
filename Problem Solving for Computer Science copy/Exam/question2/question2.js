function countTimes(array, item) {
	n = array.length;
	var count = 0;
	for (var i = 0; i < n; i++) {
		if (array[i] === item) {
            count = count + 1; //MISSING;
            //count++;
		}
	}
	return count;
}

function newCountTimes(array, item) {
	var l = 0;
	var r = array.length - 1;
	var m;
	var count = 0;
	var i;
	while (l <= r) {
		m = Math.ceil(l + ((r - l)/2));
        //console.log(m + "mid");
		if (array[m] === item) {
			count = 0;
			i = 0;
			while (array[m + i] === item) {
				count++;
				i++;
			}
			return count;
		} else if (array[m] > item) {
			r = m - 1;
            //console.log(r + "right");
		} else {
			l = m + 1;
            //console.log(l + "left");
		}
	}
	return count;
}


// All the commented out things are things I was using to test

//var array = [0,1,3,3,4,5,5,6,7];

//console.log(newCountTimes(array,5));

//var l = 5;
//var r = 8;

//var m = Math.floor((l + r )/2);
//var m = Math . ceil (l + ((r - l)/2));

//console.log(m);