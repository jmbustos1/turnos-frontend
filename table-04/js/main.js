(function($) {

	"use strict";

	$('[data-toggle="tooltip"]').tooltip()

})(jQuery);

$(document).ready(function() {
	// Seleccionar todas las celdas de la tabla y asignarles un evento de clic
	$('table.table td').click(function() {
	  // Comprobar si la celda ya está marcada
	  if($(this).hasClass('marked')) {
		// Si ya está marcada, remover la clase y el contenido (la "X")
		$(this).removeClass('marked').html('');
	  } else {
		// Si no está marcada, agregar la clase 'marked' y poner una "X" como contenido
		$(this).addClass('marked').html('<i class="fa fa-close"></i>');
	  }
	});
  });
