const express = require('express')
const { create, findById } = require('../models/url')
const router = express.Router()
const Url = require('../models/url')
const urlShortner = require('../utils/url_shortner')
const domain = 'https://afternoon-mountain-84879.herokuapp.com/' || `localhost:3000/`
// const domain = `localhost:3000/`

const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = lowercase.toUpperCase()
const number = '0123456789'
const mix = lowercase.split('').concat(uppercase.split(''), number.split('')) // 此陣列長度為 62

// 隨機五碼英數組合產出函式
// function randomCode(digit) {
//   let finalCode = ''
//   for (let i = 1; i < digit + 1; i++) {
//     const oneCode = Math.floor(Math.random() * 62)
//     finalCode += mix[oneCode]
//   }
//   return finalCode
// }

// 一鍵複製函式（開發中）


// 路由：開啟首頁
router.get('/', (req, res) => {
  res.render('index')
})

// 路由：產出縮網址
router.post('/', (req, res) => {
  const url = req.body.url

  return Url.find()
    .lean()
    .then(dataArray => {
      const target = dataArray.find(oneObject => oneObject.url === url)
      if (target === undefined) {
        // 上一行用 find() 檢視資料庫內有無縮址記錄。若無則在資料庫建立一筆新的縮址記錄。
        const code = urlShortner(5)
        return Url.create({ url, code })
          .then(() => res.render('show', { domain, code }))
      } else {
        // 前述 find() 檢視資料庫內若有縮址記錄，則資料庫不需再次建立一筆資料，直接渲染頁面告訴使用者縮址結果。
        const code = target.code
        res.render('show', { domain, code })
      }
    })
    .catch(error => console.error(error))
})

// 路由：重新導向至縮網址前的 URL
router.get('/:code', (req, res) => {
  const code = req.params.code
  return Url.find()
    .lean()
    .then(dataArray => {
      const oneObject = dataArray.find(element => {
        return element.code === code
      })
      res.redirect(`${oneObject.url}`)
    })
})

module.exports = router
