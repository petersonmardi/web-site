
	/** Footer */
	var today = new Date();
	var year = today.getFullYear();
	
	var el = document.getElementById('footer');
	el.innerHTML = '<p>SpreadCoffee&copy; - ' + year + '</p>';
	el.innerHTML += '<p> Santo Domingo, República Dominicana</p>'
	el.innerHTML += '<p>Dirección: Calle Delmonte y Tejada, Ave. Mella #120, 10211.</p>'



	/** Date */
	
	var hour = today.getHours();  /** hour from 0-23 */
	var day = today.getDay();   /** day from 1-31 */
	var date = today.getDate();  /** day in a week from 0-6 */
	var month = today.getMonth();  /** month from 0-11 */

	var monthWrapper = new Array(12);
	monthWrapper[0] = "ene";
	monthWrapper[1] = "feb";
	monthWrapper[2] = "mar";
	monthWrapper[3] = "abr";
	monthWrapper[4] = "may";
	monthWrapper[5] = "jun";
	monthWrapper[6] = "jul";
	monthWrapper[7] = "ago";
	monthWrapper[8] = "sep";
	monthWrapper[9] = "oct";
	monthWrapper[10] = "nov";
	monthWrapper[11] = "dic";

	var month = monthWrapper[today.getMonth()];

	var year = today.getFullYear();
	
	var msg = '';
	
	var msg1 = '';

	

	if (hour >= 6 && hour <= 16 && (day < 6 && day > 0)) {
		msg = '6h am - 4h pm (Abierto)';
	}
	else if (day == 6 || day == 0){
		msg = 'No está disponible ahora';
	}
	else {
		msg = '6h am - 4h pm (Cerrado)'
	}
	

	
	if (hour >= 6 && hour <= 13 && (day == 6 || day == 0)){
		msg1 = '6h am - 1h pm (Abierto)';
	}
	else if (day > 0 || day < 6) {
		msg1 = 'No está disponible ahora';
	}
	else {
		msg1 = '6h am - 1h pm (Cerrado)';
	}

	var elMsg = document.getElementById('week');
	elMsg.innerHTML = '<b> <p>' + msg + '</p> </b>';

	var elMsg1 = document.getElementById('weekend');
	elMsg1.innerHTML = '<b> <p>' + msg1 + '</p> </b>';
	
	var elMsg2 = document.getElementById('date')
	elMsg2.innerHTML = '<h4>' + date + '/' + month + '/' + year + '</h4>'

