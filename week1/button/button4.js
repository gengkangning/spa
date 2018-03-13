var num=$('#pro').val();
var time=0;
var ta=function(){
		$('#pro').val(num);
		num++;
}
$('#start').click(function(event) {
	/* Act on the event */
	console.log(num);
	time=setInterval(ta,1000)
});
$('#pause').click(function(event) {
	/* Act on the event */
	clearInterval(time);
});
$('#restart').click(function(event) {
	/* Act on the event */
	$('#pro').val(0);
	num=$('#pro').val();
	clearInterval(time);
});