/* Eventos ------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */

	/* Formulario para ser orador ------------------------------------------------------------------ */
		//Eventos para validar los campos de los formularios
		document.getElementById('nombre_orador').addEventListener('focusout', function() { validarTexto('nombre_orador'); });
		document.getElementById('apellido_orador').addEventListener('focusout', function() { validarTexto('apellido_orador'); });
		document.getElementById('descripcion_orador').addEventListener('focusout', function() { validarTexto('descripcion_orador'); });
		//Eventos para aplicar estilos a los campos de los formularios al hacer focusin
		document.getElementById('nombre_orador').addEventListener('focusin', function() { resetFocusIn('nombre_orador'); });
		document.getElementById('apellido_orador').addEventListener('focusin', function() { resetFocusIn('apellido_orador'); });
		document.getElementById('descripcion_orador').addEventListener('focusin', function() { resetFocusIn('descripcion_orador'); });
		//Evento para validar el envío del formulario de los oradores
		document.addEventListener("DOMContentLoaded", function() { document.getElementById("form_oradores").addEventListener('submit', validarOradores); });

	/* Formulario para la compra de tickets -------------------------------------------------------- */
		//Eventos para seleccionar la categoría de la compra de tickets desde las cards
		document.getElementById('card_estudiante').addEventListener('click', function() { seleccionarCategoria('card_estudiante'); });
		document.getElementById('card_trainee').addEventListener('click', function() { seleccionarCategoria('card_trainee'); });
		document.getElementById('card_junior').addEventListener('click', function() { seleccionarCategoria('card_junior'); });
		//Eventos para validar los campos de los formularios
		document.getElementById('nombre_tickets').addEventListener('focusout', function() { validarTexto('nombre_tickets'); });
		document.getElementById('apellido_tickets').addEventListener('focusout', function() { validarTexto('apellido_tickets'); });
		document.getElementById('mail_tickets').addEventListener('focusout', function() { validarMail('mail_tickets'); });
		document.getElementById('cantidad_tickets').addEventListener('focusout', function() { validarNumero('cantidad_tickets'); });
		document.getElementById('categoria_tickets').addEventListener('focusout', function() { validarTexto('categoria_tickets'); });
		//Eventos para aplicar estilos a los campos de los formularios al hacer focusin
		document.getElementById('nombre_tickets').addEventListener('focusin', function() { resetFocusIn('nombre_tickets'); });
		document.getElementById('apellido_tickets').addEventListener('focusin', function() { resetFocusIn('apellido_tickets'); });
		document.getElementById('mail_tickets').addEventListener('focusin', function() { resetFocusIn('mail_tickets'); });
		document.getElementById('cantidad_tickets').addEventListener('focusin', function() { resetFocusIn('cantidad_tickets'); });
		document.getElementById('categoria_tickets').addEventListener('focusin', function() { resetFocusIn('categoria_tickets'); });
		//Eventos para mostrar el total de la compra de tickets
		document.getElementById('cantidad_tickets').addEventListener('change', function() { aplicarDescuento(); });
		document.getElementById('categoria_tickets').addEventListener('change', function() { aplicarDescuento(); });
		//Evento para validar el envío del formulario de los tickets
		document.addEventListener("DOMContentLoaded", function() { document.getElementById("form_tickets").addEventListener('submit', validarTickets); });

/* Funciones ----------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */

	/* Formulario para ser orador ------------------------------------------------------------------ */
		//Función para validar el envío del formulario de los oradores
		function validarOradores(e) {
			e.preventDefault();
			if (validarTexto('nombre_orador') && validarTexto('apellido_orador') && validarTexto('descripcion_orador')) {
		  		document.getElementById('form_oradores').submit();
			} else {
				alert('No completó el formulario correctamente')
				return false;
			}
		}

	/* Formulario para la compra de tickets -------------------------------------------------------- */
		//Función para seleccionar la categoría de la compra de tickets desde las cards 
		function seleccionarCategoria(idCard) {
			let select = document.getElementById('categoria_tickets');
			switch (idCard) {
		        case 'card_estudiante':
		        	select.value = '1';
		            break;
		        case 'card_trainee':
		        	select.value = '2';
		            break;
		        case 'card_junior':
		        	select.value = '3';
		            break;
			}
		}
		//Funciones para la validación de los campos de los formularios
		function validarTexto(idInput) {
			let id = document.getElementById(idInput);
			if (id.value == "") {
				id.style.boxShadow = '0 0 0 0.25rem rgb(255 0 0 / 50%)';
				return false;
			} else {
				resetFocusOut(idInput);
				return true;
			}
		}
		function validarMail(idInput) {
			let id = document.getElementById(idInput);
			let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!regex.test(id.value) || id.value == "") {
				id.style.boxShadow = '0 0 0 0.25rem rgb(255 0 0 / 50%)';
				return false;
			} else {
				resetFocusOut(idInput);
				return true;
			}
		}
		function validarNumero(idInput) {
			let id = document.getElementById(idInput);
			if (id.value <= 0) {
				id.style.boxShadow = '0 0 0 0.25rem rgb(255 0 0 / 50%)';
				return false;
			} else {
				resetFocusOut(idInput);
				return true;
			}
		}
		//Funciones para volver a configurar los estilos de los campos de los formularios a la instancia original
		function resetFocusIn(idInput) {
			let id = document.getElementById(idInput);
			id.style.boxShadow = '0 0 0 0.25rem rgb(13 110 253 / 25%)';
		}
		function resetFocusOut(idInput) {
			let id = document.getElementById(idInput);
			id.style.boxShadow = 'none';
		}
		//Función para seleccionar la categoría de los tickets y aplicar el descuento
		function aplicarDescuento() {
			let id = document.getElementById('categoria_tickets');
			let precio = 200;
			let cantidad = document.getElementById('cantidad_tickets').value;
			let total;
			switch (id.value) {
		        case '0':
		        	total = cantidad * precio;
		            break;
		        case '1':
		        	total = (20 * (cantidad * precio)) / 100; /* 20% del total (descuento 80%) */
		            break;
		        case '2':
		        	total = (50 * (cantidad * precio)) / 100; /* 50% del total (descuento 50%) */
		            break;
		        case '3':
		        	total = (85 * (cantidad * precio)) / 100; /* 85% del total (descuento 15%) */
		            break;
			}
			document.getElementById('total_tickets').value = 'Total a Pagar: $' + total;
		}
		//Función para validar el envío del formulario de los tickets
		function validarTickets(e) {
			e.preventDefault();
			if (validarTexto('nombre_tickets') && validarTexto('apellido_tickets') && validarMail('mail_tickets') && validarNumero('cantidad_tickets')) {
		  		document.getElementById('form_tickets').submit();
			} else {
				alert('No completó el formulario correctamente')
				return false;
			}
		}