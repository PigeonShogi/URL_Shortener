// const lowercase = 'abcdefghijklmnopqrstuvwxyz'
// const uppercase = lowercase.toUpperCase()
// const number = '0123456789'
// const mix = lowercase.split('').concat(uppercase.split(''), number.split('')) // 此陣列長度為 62

// // 短網址輸出格式為 5 碼英數組合
// function randomCode(digit) {
//   let finalCode = ''
//   for (let i = 1; i < digit + 1; i++) {
//     const oneCode = Math.floor(Math.random() * 62)
//     finalCode += mix[oneCode]
//   }
//   return finalCode
// }

// module.exports = controller



// 短網址輸出格式為 5 碼英數組合
// module.exports = function (randomCode) {
//   const lowercase = 'abcdefghijklmnopqrstuvwxyz'
//   const uppercase = lowercase.toUpperCase()
//   const number = '0123456789'
//   const mix = lowercase.split('').concat(uppercase.split(''), number.split('')) // 此陣列長度為 62
//   let finalCode = ''

//   for (let i = 1; i < randomCode + 1; i++) {
//     const oneCode = Math.floor(Math.random() * 62)
//     finalCode += mix[oneCode]
//   }
//   return finalCode
// }

