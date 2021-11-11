/* EVENTOS */
/* Nivel 1 ------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
document.getElementById('boton_n1_ej1').addEventListener('click', mostrarHobbies);
document.getElementById('boton_n1_ej2').addEventListener('click', mostrarFrase);
document.getElementById('boton_n1_ej3').addEventListener('click', mostrarNombre);
document.getElementById('boton_n1_ej4').addEventListener('click', mostrarNombreCompleto);
document.getElementById('boton_n1_ej5').addEventListener('click', mosrtarEdad);
document.getElementById('boton_n1_ej6').addEventListener('click', mostrarBMI);
document.getElementById('boton_n1_ej7').addEventListener('click', mostrarCantVentanas);
document.getElementById('boton_n1_ej8').addEventListener('click', mostrarHumano);
document.getElementById('boton_n1_ej9').addEventListener('click', mostrarPizza);
document.getElementById('boton_n1_ej10').addEventListener('click', mostrarValoresDeVariable);
document.getElementById('boton_n1_ej11').addEventListener('click', calcularTriangulo);
document.getElementById('boton_n1_ej12').addEventListener('click', convertirLibrasAKilos);
document.getElementById('boton_n1_ej13').addEventListener('click', aplicarAumento);
document.getElementById('boton_n1_ej14').addEventListener('click', verificarAprobacion);
document.getElementById('boton_n1_ej15').addEventListener('click', aplicarAumentoCategoria);
document.getElementById('boton_n1_ej16').addEventListener('click', calcularPromedioAlumno);
document.getElementById('boton_n1_ej17').addEventListener('click', determinarMayor);
/* Nivel 2 ------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
document.getElementById('boton_n2_ej1').addEventListener('click', sumarVariables);
document.getElementById('boton_n2_ej2').addEventListener('click', calcularPromedioVariables);
document.getElementById('boton_n2_ej3').addEventListener('click', compararNotas);
document.getElementById('boton_n2_ej4').addEventListener('click', aplicarDescuento);
document.getElementById('boton_n2_ej5').addEventListener('click', calcularPrecioEntradas);
document.getElementById('boton_n2_ej6').addEventListener('click', compararNotas2);
document.getElementById('boton_n2_ej7').addEventListener('click', clasificarPelicula);
document.getElementById('boton_n2_ej8').addEventListener('click', function() { cuentaRegresiva(59, 0, 8); });
document.getElementById('boton_n2_ej9').addEventListener('click', function() { mostrarPares(0, 100); });
document.getElementById('boton_n2_ej10').addEventListener('click', function() { cuentaRegresiva(100, 0, 10); });
document.getElementById('boton_n2_ej11').addEventListener('click', ingresarNumeros);
document.getElementById('boton_n2_ej12').addEventListener('click', calcularPromedio);
document.getElementById('boton_n2_ej13').addEventListener('click', mostrarProductos);
document.getElementById('boton_n2_ej14').addEventListener('click', calcularPromedioAlturas);
document.getElementById('boton_n2_ej15').addEventListener('click', mostrarSignificadoBingo);
document.getElementById('boton_n2_ej16').addEventListener('click', mostrarNombresCurso);

/* FUNCIONES*/
/* Nivel 1 ------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
//Ejercicio 1
function mostrarHobbies() {
	let nombre = "Agustín";
	let apellido = "Massa";
	let comision = "1115";
	let hobbies = "- Pasar el tiempo con mi novia.\n- Visitar a mi familia.\n- Juntadas con amigos.\n- Ver películas, series y YouTube.\n- Jugar Videojuegos.\n- Jugar juegos de mesa.";
	let resultado = "Nombre: " + nombre + "\n" + "Apellido: " + apellido + "\n" + "Comisión: " + comision + "\n" + "Hobbies: " + "\n" + hobbies; 
	console.log(resultado);
	document.getElementById('div_n1_ej1').innerText = resultado;
	document.getElementById('div_n1_ej1').style.display = 'block';
}
//Ejercicio 2
function mostrarFrase() {
	let frase = prompt('Ingrese una frase');
	if (frase != "") {
		console.log(frase);
		document.getElementById('div_n1_ej2').innerText = frase;
		document.getElementById('div_n1_ej2').style.display = 'block';
	} else {
		alert('No ingresó una frase');
		return mostrarFrase();
	}
}
//Ejercicio 3
function mostrarNombre() {
	let nombre = prompt('Ingrese su nombre');
	if (nombre != "") {
		let resultado = "Hola " + nombre + "!";
		console.log(resultado)
		document.getElementById('div_n1_ej3').innerText = resultado;
		document.getElementById('div_n1_ej3').style.display = 'block';
	} else {
		alert('No ingresó un nombre');
		return mostrarNombre();
	}
}
//Ejercicio 4
function mostrarNombreCompleto() {
	let nombre = prompt('Ingrese su nombre');
	let apellido = prompt('Ingrese su apellido');
	let resultado = nombre + " " + apellido;
	if (nombre != "" && apellido != "") {
		console.log(resultado)
		document.getElementById('div_n1_ej4').innerText = resultado;
		document.getElementById('div_n1_ej4').style.display = 'block';
	} else {
		alert('No ingresó su nombre o su apellido');
		return mostrarNombreCompleto();
	}
}
//Ejercicio 5
function mosrtarEdad() {
	let anioNacimiento = Number(prompt('Ingrese su año de nacimiento'));
	let anioActual = new Date().getFullYear();
	let edad = anioActual - anioNacimiento;
	let resultado = "Tienes " + edad + " años" + "\n" + "(o tienes " + (edad - 1) + " si todavía no has cumplido años este año)";
	if (isNaN(anioNacimiento) || anioNacimiento == 0) {
		alert('No ingresó su año de nacimiento');
		return mosrtarEdad();
	} else {
		console.log(resultado);
		document.getElementById('div_n1_ej5').innerText = resultado;
		document.getElementById('div_n1_ej5').style.display = 'block';
	}
}
//Ejercicio 6
function mostrarBMI() {
	let peso = parseFloat(prompt('Ingrese su peso en kilogramos'));
	let altura = parseFloat(prompt('Ingrese su altura en centímetros')/100);
	let bmi = peso / (altura * altura);
	let resultado = "Tu BMI es " + bmi.toFixed(2);
	if (peso == 0 || altura == 0 || isNaN(peso) || isNaN(altura)) {
		alert('No ingresó su peso o su altura');
		return mostrarBMI();
	} else {
		console.log(resultado);
		document.getElementById('div_n1_ej6').innerText = resultado;
		document.getElementById('div_n1_ej6').style.display = 'block';
	}
}
//Ejercicio 7
function mostrarCantVentanas() {
	let cantidadDeVentanas = 3;
	let resultado = "La cantidad de ventanas que hay en mu casa es: " + cantidadDeVentanas;
	console.log(resultado);
	document.getElementById('div_n1_ej7').innerText = resultado;
	document.getElementById('div_n1_ej7').style.display = 'block';
}
//Ejercicio 8
function mostrarHumano() {
	let soyHumano = true;
	let resultado = "El valor de la variable soyHumano es: " + soyHumano;
	console.log(resultado);
	document.getElementById('div_n1_ej8').innerText = resultado;
	document.getElementById('div_n1_ej8').style.display = 'block';
}
//Ejercicio 9
function mostrarPizza() {
	let miGustoDePizza = "Napolitana";
	let resultado = "Mi gusto de pizza preferido es: " + miGustoDePizza;
	console.log(resultado);
	document.getElementById('div_n1_ej9').innerText = resultado;
	document.getElementById('div_n1_ej9').style.display = 'block';
}
//Ejercicio 10
function mostrarValoresDeVariable() {
	let variable = [false, 'Hola', 0, 'Minions'];
	let resultado = "Los valores de esta variable son: " + variable[0] + ", " + variable[1] + ", " + variable[2] + ", " + variable[3];
	console.log(resultado);
	document.getElementById('div_n1_ej10').innerText = resultado;
	document.getElementById('div_n1_ej10').style.display = 'block';
}
//Ejercicio 11
function calcularTriangulo() {
	let base = Number(prompt('Ingrese la base del triángulo en centímetros'));
	let altura = Number(prompt('Ingrese la altura del triángulo en centímetros'));
	let lado2 = Number(prompt('Ingrese la medida de otro lado del triángulo en centímetros'));
	let lado3 = Number(prompt('Ingrese la medida del último lado del triángulo en centímetros'));
	let superficie = (base * altura) / 2;
	let perimetro = base + lado2 + lado3;
	let resultado = "La superficie del triángulo es: " + superficie + "cm^2." + "\n" + "El perímetro del triángulo es: " + perimetro + "cm.";
	if (isNaN(base) || isNaN(altura) || isNaN(lado2) || isNaN(lado3) || base == 0 || altura == 0 || lado2 == 0 || lado3 == 0) {
		alert('Los datos ingresados son incorrectos');
		return calcularTriangulo();
	} else {
		console.log(resultado);
		document.getElementById('div_n1_ej11').innerText = resultado;
		document.getElementById('div_n1_ej11').style.display = 'block';
	}
}
//Ejercicio 12
function convertirLibrasAKilos() {
	let pesoLibras = Number(prompt('Ingrese su peso en Libras'));
	let pesoKilos = pesoLibras * 0.45359237;
	let resultado = "Su peso en kilogramos es: " + pesoKilos.toFixed(2) + "Kg.";
	if (isNaN(pesoLibras) || pesoLibras == 0) {
		alert('No ingresó su peso');
		return convertirLibrasAKilos();
	} else {
		console.log(resultado);
		document.getElementById('div_n1_ej12').innerText = resultado;
		document.getElementById('div_n1_ej12').style.display = 'block';
	}
}
//Ejercicio 13
function aplicarAumento() {
	let sueldo = Number(prompt('Ingrese su sueldo'));
	let aumento = (15 * sueldo) / 100;
	let total = sueldo + aumento;
	let resultado = "Su sueldo con el 15% de aumento es: $" + total;
	if (isNaN(sueldo) || sueldo == 0) {
		alert('No ingresó su sueldo');
		return aplicarAumento();
	} else {
		console.log(resultado);
		document.getElementById('div_n1_ej13').innerText = resultado;
		document.getElementById('div_n1_ej13').style.display = 'block';
	}
}
//Ejercicio 14
function verificarAprobacion() {
	let nota = Number(prompt('Ingrese la nota de un alumno'));
	let notaAprobado = 7;
	let resultado;
	if (nota >= notaAprobado) {
		resultado = "Aprobado";
	} else {
		resultado = "Reprobado";
	}
	if (isNaN(nota) || nota == 0) {
		alert('No ingresó su nota');
		return verificarAprobacion();
	} else {
		alert(resultado);
		console.log(resultado);
		document.getElementById('div_n1_ej14').innerText = resultado;
		document.getElementById('div_n1_ej14').style.display = 'block';
	}
}
//Ejercicio 15
function aplicarAumentoCategoria() {
	let categoria = prompt('Ingrese su categoría');
	let sueldo = Number(prompt('Ingrese su sueldo'));
	let aumento;
	let total;
	let resultado;
	switch (categoria) {
        case '1':
        	aumento = (30 * sueldo) / 100;
            break;
        case '2':
        	aumento = (20 * sueldo) / 100;
            break;
        case '3':
        	aumento = (10 * sueldo) / 100;
            break;
        case '4':
        	aumento = (5 * sueldo) / 100;
            break;
    }
    total = sueldo + aumento;
    resultado = "El nuevo sueldo con el aumento para la categoría " + categoria + " es: $" + total;
	if (categoria == "" || (categoria != "1" && categoria != "2" && categoria != "3" && categoria != "4") || isNaN(sueldo) || sueldo == 0) {
		alert('Los datos ingresados son incorrectos');
		return aplicarAumentoCategoria();
	} else {
		alert(resultado);
		console.log(resultado);
		document.getElementById('div_n1_ej15').innerText = resultado;
		document.getElementById('div_n1_ej15').style.display = 'block';
	}
}
//Ejercicio 16
function calcularPromedioAlumno() {
	let matricula = prompt('Ingrese su matrícula');
	let cantNotas = 5;
	let nota;
	let totalNotas = 0;
	let promedio;
	let notaAprobado = 7;
	let instancia;
	let resultado;
	for (let i = 1; i <= cantNotas; i++) {
		nota = Number(prompt('Ingrese la ' + i + '° nota'));
		if (isNaN(nota) || nota < 0 || nota > 10) {
			alert('No ingresó una nota válida. Vuelva a ingresar la nota.');
			i--;
		} else {
			totalNotas += nota;
		}
	}
	promedio = totalNotas / cantNotas;
	if (promedio >= notaAprobado) {
		instancia = "Aprobado";
	} else {
		instancia = "No aprobado";
	}
    resultado = "Matrícula del alumno: " + matricula + "\n" + "Promedio: " + promedio.toFixed(2) + "\n" + instancia;
	console.log(resultado);
	document.getElementById('div_n1_ej16').innerText = resultado;
	document.getElementById('div_n1_ej16').style.display = 'block';
}
//Ejercicio 17
function determinarMayor() {
	let numero;
	let cantNumeros = 3;
	let numMayor;
	let resultado;
	for (let i = 1; i <= cantNumeros; i++) {
		numero = parseInt(prompt('Ingrese un número entero'));
		if (isNaN(numero)) {
			alert('No ingresó un número entero. Vuelva a ingresar el número.');
			i--;
		} else {
			if (numero >= numMayor || numMayor == null) {
				numMayor = numero;
			}
		}
	}
    resultado = "El número mayor es: " + numMayor;
	console.log(resultado);
	document.getElementById('div_n1_ej17').innerText = resultado;
	document.getElementById('div_n1_ej17').style.display = 'block';
}

/* Nivel 2 ------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
//Ejercicio 1
function sumarVariables() {
	let variable_a = 33;
	let variable_b = 77;
	let variable_resultado = variable_a + variable_b;
	let resultado = "El valor de variable_resultado es: " + variable_resultado;
	console.log(resultado);
	document.getElementById('div_n2_ej1').innerText = resultado;
	document.getElementById('div_n2_ej1').style.display = 'block';
}
//Ejercicio 2
function calcularPromedioVariables() {
	let a = Number(prompt('Ingrese un número'));
	let b = Number(prompt('Ingrese un número'));
	let c = Number(prompt('Ingrese un número'));
	let d = Number(prompt('Ingrese un número'));
	let e = Number(prompt('Ingrese un número'));
	let promedio = (a + b + c + d + e) / 5;
	let resultado = "El promedio de los números ingresados es: " + promedio.toFixed(2);
	if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)) {
		alert('Los datos ingresados son incorrectos');
		return calcularPromedioVariables();
	} else {
		console.log(resultado);
		document.getElementById('div_n2_ej2').innerText = resultado;
		document.getElementById('div_n2_ej2').style.display = 'block';
	}
}
//Ejercicio 3
function compararNotas() {
	let nota1 = 10;
	let nota2 = 3;
	let resultado;
	if (nota1 > nota2) {
		resultado = "La variable nota1 es mayor que nota2";
	} else if (nota2 > nota1) {
		resultado = "La variable nota2 es mayor que nota1";
	} else if (nota1 == nota2) {
		resultado = "La variable nota1 es igual que nota2";
	}
	console.log(resultado);
	document.getElementById('div_n2_ej3').innerText = resultado;
	document.getElementById('div_n2_ej3').style.display = 'block';
}
//Ejercicio 4
function aplicarDescuento() {
	let monto = Number(prompt('Ingrese el monto a pagar de su compra'));
	let descuento = (15 * monto) / 100;
	let total = monto;
	let resultado;
	if (monto >= 100) {
		total = monto - descuento;
	}
	if (isNaN(monto)) {
		alert('No ingresó un monto válido');
		return aplicarDescuento();
	} else {
		resultado = "El monto a pagar es: $" + total;
		console.log(resultado);
		document.getElementById('div_n2_ej4').innerText = resultado;
		document.getElementById('div_n2_ej4').style.display = 'block';
	}
}
//Ejercicio 5
function calcularPrecioEntradas() {
	let cantPersonas = parseInt(prompt('Ingrese la cantidad de personas que verán la película'));
	let precio;
	let resultado;
	if (cantPersonas >= 8) {
		precio = cantPersonas * 0.5;
	} else {
		precio = cantPersonas * 1.5;
	}
	if (isNaN(cantPersonas)) {
		alert('No ingresó una cantidad de personas válida');
		return calcularPrecioEntradas();
	} else {
		resultado = "El monto a pagar es: $" + precio;
		console.log(resultado);
		document.getElementById('div_n2_ej5').innerText = resultado;
		document.getElementById('div_n2_ej5').style.display = 'block';
	}
}
//Ejercicio 6
function compararNotas2() {
	let nota1 = 5;
	let nota2 = 7;
	let resultado;
	if (nota1 > nota2) {
		resultado = "Nota1 es mayor";
	} else if (nota2 > nota1) {
		resultado = "Nota2 es mayor";
	} else if (nota1 == nota2) {
		resultado = "Nota1 es igual que Nota2";
	}
	console.log(resultado);
	document.getElementById('div_n2_ej6').innerText = resultado;
	document.getElementById('div_n2_ej6').style.display = 'block';
}
//Ejercicio 7
function clasificarPelicula() {
	let nota = prompt('Ingrese la puntuación de la película según la siguiente lista:\n- 0: mala\n- 1: regular\n- 2: buena\n- 3: muy buena\n- 4: excelente');
	let resultado;
	switch (nota) {
        case '0':
        	resultado = "Clasificación de película: Mala";
            break;
        case '1':
        	resultado = "Clasificación de película: Regular";
            break;
        case '2':
        	resultado = "Clasificación de película: Buena";
            break;
        case '3':
        	resultado = "Clasificación de película: Muy Buena";
            break;
        case '4':
        	resultado = "Clasificación de película: Excelente"
            break;
	}
	if (nota == "" || isNaN(nota) || nota < 0 || nota > 4) {
		alert('No ingresó una calificación válida');
		return clasificarPelicula();
	} else {
		console.log(resultado);
		document.getElementById('div_n2_ej7').innerText = resultado;
		document.getElementById('div_n2_ej7').style.display = 'block';
	}
}
//Ejercicio 8
function cuentaRegresiva(inicio, final, ejercicio) {
	let resultado = "Cuenta regresiva de " + inicio + " a " + final + ": \n";
	for (let i = inicio; i >= final; i--) {
		if (i == final) {
			resultado = resultado + i  + ".";
		} else {
			resultado = resultado + i + ", ";
		}
	}
	console.log(resultado);
	document.getElementById('div_n2_ej' + ejercicio).innerText = resultado;
	document.getElementById('div_n2_ej' + ejercicio).style.display = 'block';
}
//Ejercicio 9
function mostrarPares(inicio, final) {
	let resultado = "Números pares de " + inicio + " a " + final + ": \n";
	for (let i = inicio; i <= final; i++) {
		if (i%2 == 0) {
			if (i == final) {
				resultado = resultado + i + ".";
			} else {
				resultado = resultado + i + ", ";
			}
		}
	}
	console.log(resultado);
	document.getElementById('div_n2_ej9').innerText = resultado;
	document.getElementById('div_n2_ej9').style.display = 'block';
}
//Ejercicio 10
/*
	Para este ejercicio se utiliza la misma función que la del ejercicio 8 pero con distintos argumentos.
*/
//Ejercicio 11
function ingresarNumeros() {
	let numero;
	let numeros = [];
	let resultado = "Las posiciones y el valor del array son: \n";
	do {
		numero = Number(prompt('Ingrese un número. Pera finalizar ingrese -1.'));
		if (isNaN(numero)) {
			alert('No ingresó un número');
		} else {
			if (numero != -1) {
				numeros.push(numero);
			}
		}
	} while (numero != -1);
	for (let i = 0; i < numeros.length; i++) {
		resultado = resultado + "- Posición " + i + " = " + numeros[i] + "\n";
	}
	console.log(resultado);
	document.getElementById('div_n2_ej11').innerText = resultado;
	document.getElementById('div_n2_ej11').style.display = 'block';
}
//Ejercicio 12
function calcularPromedio() {
	let cantNumeros = 0;
	let numero;
	let totalNumeros = 0;
	let promedio;
	let resultado;
	do {
		numero = Number(prompt('Ingrese un número. Para finalizar ingrese -1.'));
		if (isNaN(numero)) {
			alert('No ingresó un número válido. Vuelva a ingresar el número.');
		} else {
			if (numero != -1) {
				cantNumeros++;
				totalNumeros += numero;
			} 
		}
	} while (numero != -1);
	if (cantNumeros != 0) {
		promedio = totalNumeros / cantNumeros;
	    resultado = "El promedio de los números ingresados es: " + promedio.toFixed(2);
	} else {
		resultado = "No ingresó números."
	}
	console.log(resultado);
	document.getElementById('div_n2_ej12').innerText = resultado;
	document.getElementById('div_n2_ej12').style.display = 'block';
}
//Ejercicio 13
function mostrarProductos() {
	let producto;
	let productos = [];
	let precio;
	let precios = [];
	let cantProductos = 5;
	let resultado = "Lista de productos: \n";
	for (let i = 1; i <= cantProductos; i++) {
		producto = prompt('Ingrese el nombre del ' + i + '° producto.');
		if (producto == "") {
			do {
				alert('No ingresó el nombre del producto. Vuelva a ingresarlo.');
				producto = prompt('Ingrese el nombre del ' + i + '° producto.');
			} while (producto == "");
			productos.push(producto);
			precio = Number(prompt('Ingrese el precio del ' + i + '° producto.'));
			if (isNaN(precio)) {
				do {
					alert('No ingresó el precio del producto. Vuelva a ingresarlo.');
					precio = Number(prompt('Ingrese el precio del ' + i + '° producto.'));
				} while (isNaN(precio));
				precios.push(precio);
			} else {
				precios.push(precio);
			}
		} else {
			productos.push(producto);
			precio = Number(prompt('Ingrese el precio del ' + i + '° producto.'));
			if (isNaN(precio)) {
				do {
					alert('No ingresó el precio del producto. Vuelva a ingresarlo.');
					precio = Number(prompt('Ingrese el precio del ' + i + '° producto.'));
				} while (isNaN(precio));
				precios.push(precio);
			} else {
				precios.push(precio);
			}
		}
	}
	for (let i = 0; i < productos.length; i++) {
		resultado = resultado + "- " + productos[i] + " $" + precios[i] + "\n";
	}
	console.log(resultado);
	document.getElementById('div_n2_ej13').innerText = resultado;
	document.getElementById('div_n2_ej13').style.display = 'block';
}
//Ejercicio 14
function calcularPromedioAlturas() {
	let cantPersonas = 0;
	let altura;
	let totalPersonas = 0;
	let promedio;
	let resultado;
	do {
		altura = Number(prompt('Ingrese la altura de una persona en centímetros. Para finalizar ingrese -1.'));
		if (isNaN(altura)) {
			alert('No ingresó una altura válida. Vuelva a ingresar la altura.');
		} else {
			if (altura != -1) {
				cantPersonas++;
				totalPersonas += altura;
			} 
		}
	} while (altura != -1);
	if (cantPersonas != 0) {
		promedio = totalPersonas / cantPersonas;
	    resultado = "El promedio de las alturas ingresadas es: " + promedio.toFixed(2);
	} else {
		resultado = "No ingresó alturas de personas."
	}
	console.log(resultado);
	document.getElementById('div_n2_ej14').innerText = resultado;
	document.getElementById('div_n2_ej14').style.display = 'block';
}
//Ejercicio 15
function mostrarSignificadoBingo() {
	let numero = parseInt(prompt('Ingrese un número entre 1 y 90 para saber su significado en el Bingo.'));
	let significado;
	let resultado;
	switch (numero) {
        case 1: significado = "El galán o el pequeño"; break;
        case 2: significado = "El patito o el sol"; break;
        case 3: significado = "San Cono"; break;
        case 4: significado = "La cama"; break;
        case 5: significado = "El gato o la espina"; break;
        case 6: significado = "El Corazón o el perro"; break;
        case 7: significado = "Revólver o la pipa"; break;
        case 8: significado = "Incendio, la dama"; break;
        case 9: significado = "Arroyo, el zapato"; break;
        case 10: significado = "La rosa"; break;
        case 11: significado = "Las banderillas, los dos soldaditos o el minero"; break;
        case 12: significado = "Soldado"; break;
        case 13: significado = "La mala pata"; break;
        case 14: significado = "Borracho"; break;
        case 15: significado = "Niña bonita"; break;
        case 16: significado = "Anillo"; break;
        case 17: significado = "Desgracia, barco de vela"; break;
        case 18: significado = "Sangre, los ojos, el ramillete"; break;
        case 19: significado = "San José"; break;
        case 20: significado = "La Fiesta"; break;
        case 21: significado = "Mujer"; break;
        case 22: significado = "Los dos patitos"; break;
        case 23: significado = "Cocinero, el melón"; break;
        case 24: significado = "Caballo"; break;
        case 25: significado = "Navidad"; break;
        case 26: significado = "La Misa"; break;
        case 27: significado = "El Peine, La Pajarita o La Pajarera"; break;
        case 28: significado = "El Cerro, Alicante"; break;
        case 29: significado = "San Pedro"; break;
        case 30: significado = "Santa Rosa"; break;
        case 31: significado = "La Luz"; break;
        case 32: significado = "Dinero"; break;
        case 33: significado = "La edad de cristo"; break;
        case 34: significado = "La Cabeza"; break;
        case 35: significado = "Pajarito"; break;
        case 36: significado = "Castaña"; break;
        case 37: significado = "Eucaliptos. La Espada o «La puñalá»"; break;
        case 38: significado = "Piedras"; break;
        case 39: significado = "Lluvia"; break;
        case 40: significado = "El cura"; break;
        case 41: significado = "El cuchillo"; break;
        case 42: significado = "Zapatillas"; break;
        case 43: significado = "Balcón, La Corona"; break;
        case 44: significado = "La Cárcel, Los Tacones"; break;
        case 45: significado = "El vino"; break;
        case 46: significado = "Tomates, El Sombrero"; break;
        case 47: significado = "Muerto"; break;
        case 48: significado = "El borrego"; break;
        case 49: significado = "La carne"; break;
        case 50: significado = "El pan"; break;
        case 51: significado = "Serrucho"; break;
        case 52: significado = "Madre e hijo"; break;
        case 53: significado = "El Barco"; break;
        case 54: significado = "La vaca"; break;
        case 55: significado = "Los civiles"; break;
        case 56: significado = "La caída"; break;
        case 57: significado = "El jorobado"; break;
        case 58: significado = "Ahogado"; break;
        case 59: significado = "Las plantas"; break;
        case 60: significado = "La virgen"; break;
        case 61: significado = "Escopeta"; break;
        case 62: significado = "Inundación"; break;
        case 63: significado = "Casamiento"; break;
        case 64: significado = "Llanto"; break;
        case 65: significado = "El cazador"; break;
        case 66: significado = "Lombriz"; break;
        case 67: significado = "Mordida"; break;
        case 68: significado = "Sobrinos"; break;
        case 69: significado = "Vicios"; break;
        case 70: significado = "Muerto, Sueño"; break;
        case 71: significado = "El Maestro"; break;
        case 72: significado = "Sorpresa"; break;
        case 73: significado = "Hospital"; break;
        case 74: significado = "La escalera"; break;
        case 75: significado = "Besos"; break;
        case 76: significado = "Las llamas"; break;
        case 77: significado = "Las dos banderas"; break;
        case 78: significado = "Ramera"; break;
        case 79: significado = "Ladrón"; break;
        case 80: significado = "La Bocha"; break;
        case 81: significado = "Las Flores"; break;
        case 82: significado = "La pelea, el jarro"; break;
        case 83: significado = "Mal tiempo"; break;
        case 84: significado = "La iglesia"; break;
        case 85: significado = "Linterna"; break;
        case 86: significado = "El humo"; break;
        case 87: significado = "Piojos"; break;
        case 88: significado = "Las calabazas"; break;
        case 89: significado = "La rata"; break;
        case 90: significado = "El abuelo"; break;
        default: alert('No ingresó un número válido.'); return mostrarSignificadoBingo(); break;
	}
	resultado = "El significado del número " + numero + " en el Bingo es: " + significado;
	console.log(resultado);
	document.getElementById('div_n2_ej15').innerText = resultado;
	document.getElementById('div_n2_ej15').style.display = 'block';
}
//Ejercicio 16
function mostrarNombresCurso() {
	let nombres = ['Analia', 'Bernardo', 'Javier', 'Gisela', 'Hugo', 'Gustavo', 'Maria', 'Lucas', 'Marcos', 'Mónica'];
	let apellidos = ['Cortez', 'Ballaco', 'Lopez', 'Pérez', 'Torres', 'Coria', 'Garro', 'Contreras', 'Luna', 'Cruz'];
	let resultado = "Los nombres de 10 compañeros del curso de Fullstack de codo a codo son: \n";
	for (let i = 0; i < nombres.length; i++) {
		resultado = resultado + "- " + nombres[i] + " " + apellidos[i] + "\n";
	}
	console.log(resultado);
	document.getElementById('div_n2_ej16').innerText = resultado;
	document.getElementById('div_n2_ej16').style.display = 'block';
}