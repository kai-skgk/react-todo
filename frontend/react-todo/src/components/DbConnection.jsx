import React from 'react'
import Axios from 'axios'

// // ここでAPIから取得→変数に設定→return でコンポーネントに変数を設定して返す
//const app = Express();
const axios = Axios.create({
    baseURL: "http://localhost:4000/api",
})

const searchTasks = async () => {
    const url = '/search'
    console.log("API叩く")
    const response = await axios.get(url).then((status) => {
        console.log("ステータスコード：", status)
    }).catch(err => console.log("失敗：",err))
    console.log("axiosデータ取得",response)
    return response;
}

const DbResult = () => {
    const data = searchTasks();

    return (
        <>
            <p>ここにデータベース検索結果が表示される</p>
        </>
    )
}

export default DbResult