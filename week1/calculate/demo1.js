var width=document.getElementsByClassName('rectangle_width');
var height=document.getElementsByClassName('rectangle_height');
var calc=document.getElementsByClassName('rectangle_calc');
var perimeter=document.getElementsByClassName('rectangle_perimeter');
var area=document.getElementsByClassName('rectangle_area');

calc.onclick=function(){
  perimeter.value=2*width.value+2*height.value;
  area.value=width.value*height.value;
};

