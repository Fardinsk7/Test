const express = require("express");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.disable('x-powered-by')

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server listening to http://localhost:${port}`);
})