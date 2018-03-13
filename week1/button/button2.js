jQuery(document).ready(function($) {
	console.log(1);
	$('#btn2').hide();
	$('#btn3').click(function() {
		$('#btn2').val($('#btn1').val());
		if($('#btn3').is(':checked')){
			$('#btn2').show();
			$('#btn1').hide();
		}else{
			$('#btn1').show();
			$('#btn2').hide();
		}
	});
});