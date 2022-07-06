const express = require('express')
const { create, findById } = require('../models/url')
const router = express.Router()
const Url = require('../models/url')
const domain = 'https://afternoon-mountain-84879.herokuapp.com/' || `localhost:${port}`

const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = lowercase.toUpperCase()
const number = '0123456789'
const mix = lowercase.split('').concat(uppercase.split(''), number.split('')) // 此陣列長度為 62

// 短網址輸出格式為 5 碼英數組合
function randomCode(digit) {
  let finalCode = ''
  for (let i = 1; i < digit + 1; i++) {
    const oneCode = Math.floor(Math.random() * 62)
    finalCode += mix[oneCode]
  }
  return finalCode
}

// 路由：開啟首頁
router.get('/', (req, res) => {
  res.render('index')
})

// 路由：產出縮網址
router.post('/', (req, res) => {
  const url = req.body.url
  const code = randomCode(5)

  return Url.create({ url, code })
    .then(() => res.render('show', { domain, code }))
    .catch(error => console.error(error))
})

// 路由：重新導向至縮網址前的 URL
router.get('/:code', (req, res) => {
  const code = req.params.code
  return Url.find()
    .lean()
    .then(dataArray => {
      const oneArray = dataArray.find(element => {
        return element.code === code
      })
      res.redirect(`${oneArray.url}`)
    })
})

// 測試路由：
router.get('/short_url/output', (req, res) => {
  res.render('show')
})

module.exports = router