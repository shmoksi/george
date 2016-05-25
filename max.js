

function generateMatrix(){
	var array = [];
	for (var i = 0; i < 3; i++) {
		var tmp_array = [];
			for (var j = 0; j < 5; j++) {
				tmp_array.push(i + 1);
			}
		
		array.push(tmp_array);
	}
	return array;
}


var my_array = generateMatrix();
console.log(my_array);