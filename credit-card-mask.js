// The goal here is to mask all digits of a credit card number except that last 4 (for privacy)

function maskify(cc) {
   if (cc.length > 4) {
      let maskedCC = cc.slice(cc.length -4, cc.length)
      let hashes = ''

      for (i = 0; i < cc.length - 4; i++) {
         hashes += '#'
      }
      return hashes + maskedCC
      
   } else {
      return cc
   }
}




console.log(maskify('1'))
console.log(maskify('4556364607935616'))