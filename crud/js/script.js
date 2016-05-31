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
	






	$.each(users, function() {
		$('.table').append('<tr><td>'
			+ this.name + '</td><td>'
			+ this.age + '</td><td>'
			+ this.email + '</td><td><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-danger">Delete</button></td></tr>');

	});



$('.btn-green').on('click', function() {
		$('#myModal').modal();
	});


	

	$('#add-user').on('click', function() {
		var name = $('#name').val();
		var age = $('#age').val();
		var email = $('#email').val();
		$('.table').append('<tr><td>' + name + '</td><td>' + age + '</td><td>' + email + '</td></tr>');
	});


});


	