# AC S2-3 A8: Restaurant List

## Features
1. 使用者須先進行註冊、登入，才能使用本餐廳紀錄網站
2. 完成登入後，使用者可以在首頁看到所有他記錄過的餐廳列表
3. 使用者可以在首頁看到餐廳照片、餐廳名稱、餐廳分類、評分等資訊
4. 使用者可以使用搜尋功能，找出名稱或類別符合關鍵字的餐廳
5. 使用者可以點擊餐廳取得更進一步的資訊，如：餐廳類別、地址、電話、敘述、照片......等等
6. 使用者可以新增、修改、刪除一家餐廳的資訊

## Built with
* [VS Code](https://code.visualstudio.com/) - 開發環境
* [Node.js](https://nodejs.org/en/) Ver.14.16.0 - 執行環境
* [Express.js](https://www.npmjs.com/package/express) Ver.4.16.4 - 應用程式框架
* [Express-handlebars](https://www.npmjs.com/package/express-handlebars) Ver.3.0.0. - 樣版引擎
* Mongoose Ver.5.9.7
* Body-Parser Ver.1.20.0
* Method-Override Ver.3.0.0
* Express-Session Ver.1.17.1
* Passport Ver.0.4.1
* Passport-local Ver.1.0.0
* Passport-Facebook Ver.3.0.0
* Connect-Flash Ver.0.1.1
* bcryptjs Ver.2.4.3
* Dotenv Ver.8.2.0

## Installing
1. Install Node.js and npm in advance
2. Clone this project
```
git clone https://github.com/how200284/AC2-3_restaurant_list.git
```
3. Install and require dependencies
```
npm install
```
4. Install nodemon
```
npm i nodemon
```
5. Load seeder user
```
npm run seed
```
6. Start server
```
npm run dev
```
7. Execute successfully if seeing following message
```
This express server is running on localhost:3000
mongodb connected!
```
