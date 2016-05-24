var arr1 = [[1, 1, 1, 1, 1],[1, 1, 1, 1, 1]];

function arrMatrix (arr){
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			console.log(arr[j]);
		}
	}
}

arrMatrix(arr1);