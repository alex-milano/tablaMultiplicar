$(document).ready(function(){
    $("tbody").fadeOut(); /*Al hacer un fadein no aparece los datos, lo mejor es asegurarse de que aparezca cambiando el valor de este efecto */
    $("#calcular").attr("disabled",true);
    $("#borrar").attr("disabled",true);
    $("#numero").keypress(function(tecla) {
      if (tecla.which == 13) {
        return false;
      }
    });
  });
  /* Which es un método que sirve para darnos el código ASCII de una tecla. En este caso lo que hago es desactivar la tecla enter en el formulario. Por defecto están desactivados los botones. cada vez que carga la página.*/
  function borrar() {
    var elemento=$("tbody");
    elemento.fadeOut("slow", function(){
        for (var i=9;i>=0;i--){
            $("tbody>tr")[i].remove();
        }
        $("#numero").val("");
        $("#calcular").attr("disabled",true);
        $("#borrar").attr("disabled",true);
    });
  }
  /* En este función borro las 10 linea de la multiplicación, limpio el campo y reseteo los botones.*/
  function calcular(){
    var tablamul=document.querySelector("#numero").value;
    for (var i=1;i<=10;i++){
        $("tbody").append("<tr><td>"+tablamul+"</td><td>x</td><td>"+i+"</td><td>=</td><td>"+(i*tablamul)+"</td>");
    }
    $("#borrar").attr("disabled",false);
    $("#calcular").attr("disabled",true);
    $("tbody").fadeIn("slow");
  }
  /* Creo un for para ir creando las 10 lineas de cada multiplicación y meterlas en la tabla. Con el método append creo los diferentes tr y td*/ 
  
  function desactivar() {
    if ($("#numero").val().length==0) {
      $("#calcular").attr("disabled",true);
      $("#borrar").attr("disabled",true);
    }
    else{
      $("#calcular").attr("disabled",false);
      $("#borrar").attr("disabled",true);
    }
  }
  /* Esta función la uso para activar o desactivar los botones según hayamos escrito algo en el campo del formulario.*/
  $("#calcular").on("click",calcular);
  $("#borrar").on("click",borrar);
  $("#numero").on("keyup", desactivar)
  /* Creo los eventos para los botones y para el campo.*/