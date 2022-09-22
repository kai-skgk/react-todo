const express = require('express')
const app = express();
const port = 4000;

app.use("/api", require("./DbConnectAPI.js"))




app.get("/",(req, res) => {
    res.redirect("http://localhost:3000");
})

app.listen(port, () => {
    console.log(`${port}で起動中`)
})