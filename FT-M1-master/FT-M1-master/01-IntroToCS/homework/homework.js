'use strict';

function BinarioADecimal(num) {
   console.log(num);
   var bina = num.split("").reverse().join("");
   console.log(bina);

   var suma = 0;

   for (let i = 0; i < bina.length; i++) {
      suma += bina[i] * 2 ** i;
      console.log(suma);
   }
   console.log(suma);
   return suma;
}

function DecimalABinario(num) {

}

BinarioADecimal("10");

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};