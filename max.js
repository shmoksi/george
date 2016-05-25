function arrMatrix (){
	var arr1 = [];
	for (var i = 0; i < 2; i++) {
		arr1[i] = [];
		for (var j = 0; j < 5; j++) {
			arr1[i].push(1);
		}
	}
	return arr1;
}

function generateMatrix(){
	var array = [];
	for (var i = 0; i < 2; i++) {
		var tmp_array = [];
		for (var j = 0; j < 5; j++) {
			tmp_array.push(1);
		}
		array.push(tmp_array);
	}
	return array;
}


var final_array = arrMatrix();
console.log(final_array);

var my_array = generateMatrix();
console.log(my_array);