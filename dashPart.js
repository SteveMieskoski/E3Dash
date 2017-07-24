$('document').ready(function () {


	var userData = localStorage.getItem('user_data');
	userData = JSON.parse(userData);

	$('#industryExample').attr('action', userData.industryExample);
	$('#wellsExample').attr('action', userData.wellsExample);
	$('#allStockExample').attr('action', userData.allStockExample);

	//$('#project').text(userData.project[0].project);
	//$('#version').text(userData.project[0].version);
	//$('#download').attr('action', userData.project[0].download);

	for(var i=0; i<userData.project.length; i++){
		var template = '<tr>' +
			'<td >' + userData.project[i].project + '</td>' +
			'<td >' + userData.project[i].version +'</td>' +
			'<td >' +
			'<form  method="get" action="'+ userData.project[i].download +'">' +
			'<button type="submit" class="btn btn-primary btn-margin">Download!</button>' +
			'</form>' +
			'</td>' +
			'</tr>';
		$('#projectTable').append(template)
	}


});