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
   var binario = "";
   while (num > 0) {
      var result = num % 2;
      num = Math.floor(num / 2);
      console.log(result);
      console.log(num);
      binario = result + binario;
   }
   console.log(binario);
   return binario;
}

BinarioADecimal("1100");
DecimalABinario(8);

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};