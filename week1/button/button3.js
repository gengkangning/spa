jQuery(document).ready(function($) {
	console.log
	$('#btn1').change(function() {
		/* Act on the event */
		var val=$('#btn1').val();
		$('#sp').html(val);
	})
});