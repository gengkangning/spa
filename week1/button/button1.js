window.onload=function(){
	setInterval(function(){
		var a=$('span').html();
		if(a>0)
		{
			$('span').html(--a);
		}else{
			$('#btn1').removeAttr("disabled");
		}
	}, 1000);

}