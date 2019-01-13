$(document).ready(function(){
/*
.text(inserta texto)
.html(inserta texto, cambiandolo)
.append(inserta texto, detras de lo que haya)
.prepend (inserta texte, delante de lo que haya)
.before( inserta antes)
.after(inserta elemento despues de lo que haya)


*/
$("#boton").click(function(){

    var bool1=document.getElementById("error-form1");
    var bool2=document.getElementById("error-form2");
   
    if($("#nombre").val()==""){
      if(bool1==null){ 
        $("#nombre").after("<span id='error-form1' style='color:red'>El nombre esta vacio</span>");
        
      }else{
            
      }

    }else{
        $('#error-form1').fadeOut(1000);
    
    }


    if($("#apellido").val()==""){
        if(bool2==null){ 
        $("#apellido").after("<span id='error-form2' style='color:red'>El apellido esta vacio</span>");
        }else{

       }
}else{
    $('#error-form2').fadeOut(1000);
    }
});


});