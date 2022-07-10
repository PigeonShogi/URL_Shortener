# 縮網址網站
## 簡介
這是一個將網址縮短的網站，縮短後的網址為 http://localhost:3000/ ＋ 五碼英文數字
## 功能

・使用者可在主頁面輸入欲縮短的網址，提交後即可取得縮網址。

・系統會記錄使用者輸入過的網址，輸入同樣網址將得到同樣的縮網址。

## 安裝 
1. 使用終端機 Clone 此專案至本機電腦
```
git clone https://github.com/PigeonShogi/URL_Shortener.git
```

2. 使用終端機進入存放此專案的資料夾
```
cd URL_Shortener
```

3. 安裝 nodemon
```
npm install -g nodemon
```

4. 建立 package.json 檔
```
npm init -y
```

5. 利用 npm 安裝所需套件
```
npm i express@4.16.4
npm i express-handlebars@3.0.0
npm i mongoose

```
6. 以 nodemon 開啟 app.js
```
npm run dev
```

7. 複製顯示在終端機的網址（ http://localhost:3000/ ），前往網頁

## 開發工具
* Node.js 14.16.0
* Express 4.18.1
* Express-Handlebars 6.0.6
* Bootstrap 5.2.0
* body-parser 1.20.0
* mongoose 6.4.2