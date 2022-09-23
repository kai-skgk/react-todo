const Express = require('express')
const cors = require('cors')
const Mysql = require('mysql2')
const moment = require('moment')
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PUT, PATCH, DELETE, OPTION"
//     )
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
//     next()
// })
const router = require("express").Router();

router.use(cors({
    origin: 'http://localhost:3000', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))

router.get('/search',(req, res) => {
    try {
        console.log("DB処理開始")
        const connection = Mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'hoge-db'
        })
        console.log("DB接続")
        connection.query("SELECT * FROM taskdb;", function (err, result, fields) {
            if(err){
                console.log("接続終了（異常）")
                throw err;
            }
            console.log("DB取得結果：",result)
            //res.send(result)
            res.json(result)
        })
    } catch (err) {
        console.log("DB接続エラー",err)
        res.send("接続エラー")
    }
})

router.post('/insert',(req, res) => {
    try {
        console.log("DB処理開始")
        const connection = Mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'hoge-db'
        })
        console.log("DB接続")
        //リクエストで値を飛ばす方法が知りたい

        connection.query("INSERT INTO taskdb(id,name,created_at,completed_at) values(?,?,?,null);", 
        [Math.floor(Math.random() * 10000).toString(),'sample',moment(new Date()).format('YYYY/MM/DD HH:mm:ss')],
        function (err, result, fields) {
            if(err){
                console.log("接続終了（異常）")
                throw err;
            }
            console.log("DB取得結果：",result)
            res.send('データ追加完了')
        })
    } catch (err) {
        console.log("DB接続エラー",err)
        res.send("接続エラー")
    }
})

router.post('/delete',(req, res) => {
    try {
        console.log("DB処理開始")
        const connection = Mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'hoge-db'
        })
        console.log("DB接続")
        //リクエストで値を飛ばす方法が知りたい
        connection.query("INSERT INTO taskdb(id,name,created_at,completed_at) values(?,?,?,null);", 
        [Math.floor(Math.random() * 10000).toString(),'sample',moment(new Date()).format('YYYY/MM/DD HH:mm:ss')],
        function (err, result, fields) {
            if(err){
                console.log("接続終了（異常）")
                throw err;
            }
            console.log("DB取得結果：",result)
            res.send('データ追加完了')
        })
    } catch (err) {
        console.log("DB接続エラー",err)
        res.send("接続エラー")
    }
})


module.exports = router;
