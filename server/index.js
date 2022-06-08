const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Settings = require("./config/config");
const app=express();

app.use(bodyParser.json());
app.use(cors());

console.log();

let port=Settings.serverconfig.PORT;

app.listen(port,()=>{
    console.log(`Server is running on port :${port}`);
})
