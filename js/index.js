$(document).ready(function(){
  /*************************************MENU DESPLEGABLE SUBNIVELES*********************************************/
  $('.princi').hover(function (e) {
    // over
    var x= e.target;
    $(x).children('.secun').slideDown('fast');
    
}, function (e) {
    // out
    var x= e.target;
    $(x).children('.secun').slideUp('slow');
 }
);
$('.secun li').hover(function (e) {
  // over
  var x= e.target;
  $(x).children('.terc').slideDown('fast');
  
}, function (e) {
  // out
  var x= e.target;
  $(x).children('.terc').slideUp(10);
}
);
$('.terc').hover(function (e) {
  // over
}, function (e) {
  // out
  var x= e.target;
  $('.terc').slideUp('fast');
}
);

$('section,aside,img').mouseover(function(){
 $('.secun').delay('fast').slideUp('slow');
 $('.terc').slideUp('slow');
});
  /*************************************FIN MENU*********************************************/


});