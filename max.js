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

console.log(arrMatrix()[0]);
console.log(arrMatrix()[1]);