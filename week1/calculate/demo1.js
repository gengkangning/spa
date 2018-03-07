
var cal=function(){
	var width=document.getElementById('rectangle_width');
	var height=document.getElementById('rectangle_height');
	var calc=document.getElementById('rectangle_calc');
	var perimeter=document.getElementById('rectangle_perimeter');
	var area=document.getElementById('rectangle_area');   
	perimeter.value=2*width.value+2*height.value;
	area.value=width.value*height.value;
};

