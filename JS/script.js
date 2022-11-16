//#region variables
const nombre = `luli`;
let nombre2 = "lourdes";
var dni = '46330054';
//#endregion variables

//#region nombres
console.log(nombre);
console.log(nombre2);
console.log(dni);
//#endregion nombres

//#region suma
let num1 = 60;
let num2 = 60;
function suma(num1, num2) {
    let k = num1 + num2;
    return k;
}
console.log(suma(num1, num2));
//#endregion suma


//#region resta
let numero1 = 60;
let numero2 = 50;
function resta(numero1, numero2) {
    let rest = numero1 - numero2;
    return rest;

}
console.log(resta(numero1, numero2));
//#endregion resta

/#region multiplicacion
let multi1 = 5;
let multi2 = 6;
function multiplicacion(multi1, multi2) {
    let multiplic = multi1 * multi2;
    return multiplic;
}
console.log(multiplicacion(multi1, multi2));
//#endregion multiplicacion


//#region division
let divi1 = 10;
let divi2 = 2;
function division(divi1, divi2) {
    let divisio = divi1 / divi2;
    return divisio;
}
console.log(division(divi1, divi2));
//#endregion division


let array1 = [60, 50, 40];
for (i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}