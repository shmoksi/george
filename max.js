function generateMatrix(){
	var array = [];
	for (var i = 0; i < 5; i++) {
		var tmp_array = [];
		for (var j = 0; j < 5; j++) {

			if (i == j) {
				tmp_array[j] = 1;
			} else if (i > j) {
				tmp_array[j] = 3;
			} else {
				tmp_array[j] = 2;
			}
		}
		array.push(tmp_array);
	}
	return array;
}

function drawMatrix(array) {
	...
}


var my_array = generateMatrix();
drawMatrix(my_array);