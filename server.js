const express = require("express");
const cors = require("cors");
const connecttoMongo = require("./database/db")

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.disable('x-powered-by')

app.get("/",(req,res)=>{
    res.send("Hello World")
})

connecttoMongo()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server listening to http://localhost:${port}`);
    })

})
