//Codigo Cuadrado
console.group("Cuadrados");

// const LadoCuadrado = 5;
// console.log("Los lados de mi cuadrado son " + LadoCuadrado + "cm"

function PerimetroCuadrado(Lado){
    return Lado * 4;
};

function AreaCuadrado(Lado){
    return Lado * Lado;
};
// console.log("EL area del cuadrado es " + AreaCuadrado + "cm^2");

console.groupEnd();

//Codigo Triangulo
console.group("Triangulos");
// const LadoTriangulo1 = 6;
// const LadoTriangulo2 = 6;
// const BaseTriangulo = 4;
// console.log(
//     "Los lados de mi traingulo son " 
//     + LadoTriangulo1 + "cm " 
//     + LadoTriangulo2 + "cm "
//     + BaseTriangulo + "cm "
// );

// const AlturaTriangulo = 5.5;
// console.log("La altura del triangulo es " + AlturaTriangulo + "cm");

function PerimetroTriangulo (Lado1, Lado2 ,Base){
    return Lado1 + Lado2 + Base;
};
// console.log("EL perimetro del triangulo es " + PerimetroTriangulo + "cm");

function AreaTriangulo (BaseTriangulo, AlturaTriangulo){
    return BaseTriangulo * AlturaTriangulo / 2;
};
// console.log("el area del triagulo es "+ AreaTriangulo + "cm^2");

console.groupEnd();

//Codigo circulo
console.group("Circulo");

//Radio
// const RadioCirculo = 4;
// console.log("El radio de mi circulo es " + RadioCirculo + "cm");

//Diametro

function DiametroCirculo(radio){
    return radio * 2;
};

// const DiametroCirculo = RadioCirculo * 2;
// console.log("El diametro de mi circulo es " + DiametroCirculo + "cm");

//PI
const PI = Math.PI
console.log("PI vale " + PI)

//Circufrencia
function PerimetroCirculo(radio){
    const diametro = DiametroCirculo(radio);
    return diametro * PI;
};
// const CircuferenciaCirculo = DiametroCirculo * PI;
// console.log("La circuferencia de mi circulo es " + CircuferenciaCirculo + "cm");

//Area
// const AreaCirculo = (RadioCirculo + RadioCirculo) * PI;
// console.log("El area de mi circulo es " + AreaCirculo + "cm^2");
function AreaCirculo(radio){
    return (radio * radio) * PI; 
};

console.groupEnd();

//Interactura con html

function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = PerimetroCuadrado(value);
    alert(perimetro)
};

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = AreaCuadrado(value);
    alert(area)
};

//*******************

function CalcularPerimetroTriangulo() {
    const Lado1 = document.getElementById("InputTriangulo1").value;
    const Lado2 = document.getElementById("InputTriangulo2").value;
    const Base = document.getElementById("InputTriangulo3").value;

    const perimetro = PerimetroTriangulo(Number(Lado1), Number(Lado2), Number(Base));

    alert(perimetro);
}

function CalcularAreaTriangulo() {
    const Base = document.getElementById("InputTriangulo3").value;
    const Altura = document.getElementById("InputTriangulo4").value;

    const area = AreaTriangulo(Number(Base), Number(Altura))

    alert(area);
}

//**********

function CalcularPerimetroCirculo() {
    const Radio = document.getElementById("InputCirculo").value;

    const perimetro = PerimetroCirculo(Radio)
    alert(perimetro)
}