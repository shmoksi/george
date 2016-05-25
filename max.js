

function generateMatrix(){
	var array = [];
	for (var i = 0; i < 3; i++) {
		var tmp_array = [];
		if (i == 0) {
			for (var j = 0; j < 5; j++) {
				tmp_array.push(1);
			}
		} else if (i == 1) {
			for (var j = 0; j < 5; j++) {
				tmp_array.push(2);
			}
		} else {
			for (var j = 0; j < 5; j++) {
				tmp_array.push(3);
			}
		}
		
		array.push(tmp_array);
	}
	return array;
}


var my_array = generateMatrix();
console.log(my_array);