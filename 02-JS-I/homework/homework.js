// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 8;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// Matius420

function devolverString(str) {
  return str;
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function sonIguales(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length; 
}

function menosQueNoventa(num) {
  if(num < 90) {
    return true;
  } else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  return num > 50;
}

function obtenerResto(x, y) {
  return x % y;
}

function esPar(num) {
  if( num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function esImpar(num) {
  if(num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function elevarAlCuadrado(num) {
 return Math.pow(num, 2); 
}

function elevarAlCubo(num) {
  return num * num * num;
}

function elevar(num, exponent) {
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
}

function numeroRandom() {
  return Math.random();
}

function esPositivo(numero) {
  if(numero === 0) {
    return false;
  }
  else if(numero > 0) {
    return "Es positivo";
  }
  else {
    return "Es negativo";
  }
}

function agregarSimboloExclamacion(str) {
  return str + '!';
}

function combinarNombres(nombre, apellido) {
  var combinado = nombre + ' ' + apellido;
  return combinado; 
}

function obtenerSaludo(nombre) {
  return 'Hola ' + nombre + '!'; 
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}


function retornarPerimetro(lado){
  return lado * 4 
}


function areaDelTriangulo(base, altura){
  return (base * altura)/2
}


function deEuroAdolar(euro){
  return euro * 1.2
}


function esVocal(letra){
  if(letra.length > 1){
    return "Dato incorrecto"
  }
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }
  return "Dato incorrecto"
}


module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
