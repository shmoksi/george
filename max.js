

function generateMatrix(){
	var array = [];
	for (var i = 0; i < 5; i++) {
		var tmp_array = [];
			for (var j = 0; j < 5; j++) {
				tmp_array.unshift(3);
				tmp_array[i + 1] = 2;
			}
		tmp_array[i] = 1;
		tmp_array.length = 5;
		array.push(tmp_array);
	}
	return array;
}


var my_array = generateMatrix();
console.log(my_array);