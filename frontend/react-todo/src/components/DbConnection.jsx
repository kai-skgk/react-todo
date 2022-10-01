import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {
    Box, Paper, Button,
    Table, TableHead, TableBody, TableRow, TableCell, TableContainer, TablePagination
} from '@mui/material'

// // ここでAPIから取得→変数に設定→return でコンポーネントに変数を設定して返す
//const app = Express();
const axios = Axios.create({
    baseURL: "http://localhost:4000/api",
})

export const searchTasks = async () => {
    const url = '/search'
    console.log("API叩く")
    try {
        const response = await axios.get(url)
        console.log("res", response)
        return response.data
    } catch (err) {
        console.log("失敗：", err)
    }
    // const response = await axios.get(url).then((status) => {
    //     console.log("ステータスコード：", status)
    //     console.log("axiosデータ取得", status.data)
    //     return status.data;
    // }).catch(err => console.log("失敗：", err))
}

export const insertTasks = async (name) => {
    const url = '/insert'
    console.log("データ追加API")
    try {
        const response = await axios.post(url,{
            name: name
        })

        console.log("res:", response)
        return 'ok'
    } catch (err) {
        return 'ng'
    }
}

const DbResult = (props) => {
    const [data, setData] = useState([]);
    //setData(searchTasks())
    const { name } = props
    const [update, setUpdate] = useState(false)

    // テーブル更新したいなら、api呼び出して改めてdataに値を設定する必要がある
    useEffect(() => {
        console.log("更新")
        async function fetchData() {
            setData(await searchTasks())
            console.log("searchTasks", searchTasks())
            console.log("データ設定：", data)
        }
        fetchData();
    }, [update])


    useEffect(() => {
        async function fetchData() {
            setData(await searchTasks())
            console.log("searchTasks", searchTasks())
            console.log("データ設定：", data)
        }
        fetchData();
    }, [])

    return (
        <><Box>Todo履歴</Box>
            <Box sx={{ width: '100%', height:500, overflow:"hidden"}}>
                <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                    <Table aria-label="sticky table" stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">id</TableCell>
                                <TableCell align="center">名前</TableCell>
                                <TableCell align="center">作成日</TableCell>
                                <TableCell align="center">完了日</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell component="th" scope="row">{row.created_at}</TableCell>
                                    <TableCell component="th" scope="row">{row.completed_at}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Button onClick={() => {
                setUpdate(update ? false : true)
            }}>更新</Button>
        </>
    )
}


export default DbResult