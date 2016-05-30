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
	for (var i = 0; i < array.length; i++) {
		console.log(i);
		document.write(array[i].join(' ') + '<br>');
	}
}

function generateView(array){
	document.write('<table>');
	for (var i = 0; i < array.length; i++) {
		document.write('<tr>');
		for (var j = 0; j < array[i].length; j++) {
			document.write('<td>' + array[i][j] + '</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}


var my_array = generateMatrix();
drawMatrix(my_array);

generateView(my_array);
