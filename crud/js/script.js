var users = [
	{
		id: 0,
		name: 'Oksana',
		age: 23,
		email: 'dmytruk.oksi@gmail.com'
	},
	{
		id: 1,
		name: 'Sofiya',
		age: 25,
		email: 'sofiya@gmail.com'
	}
]

$(document).ready(function(){
	$('.btn-green').on('click', function() {
		$('#myModal').modal();
	}); 
	
		
	
	
	
	$.each(users, function() {
		$('.table').append('<tr><td>' 
			+ this.name + '</td><td>' 
			+ this.age + '</td><td>' 
			+ this.email + '</td><td><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-danger">Delete</button></td></tr>');

	});

});

