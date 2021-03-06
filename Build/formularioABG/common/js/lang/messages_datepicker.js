/* InicializaciÃ³n en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
jQuery(function($){
	$.datepicker.regional['en'] = { 
		closeText: 'Done', 
		prevText: 'Prev', 
		nextText: 'Next', 
		currentText: 'Today', 
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'], 
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['S','M','T','W','T','F','S'],
		weekHeader: 'Wk',
		dateFormat: 'mm/dd/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['en']);
});