$('document').ready(function() {


	var userData = localStorage.getItem('user_data');
	userData = JSON.parse(userData);

	$('#industryExample').attr('action', userData.industryExample);
	$('#wellsExample').attr('action', userData.wellsExample);
	$('#allStockExample').attr('action', userData.allStockExample);

})