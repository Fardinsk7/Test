const express = require("express");
const cors = require("cors");
const connecttoMongo = require("./database/db")

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.disable('x-powered-by')

app.get("/",(req,res)=>{
    res.send("Hello World 🎉")
})

app.post("/admin/uploadProducts",require("./routes/products"));
app.get("/admin/getallProduct",require("./routes/products"));
app.get("/admin/:id",require("./routes/products"));
app.delete("/delete/:id",require("./routes/products"));

//User Authentication
app.post("/signup",require("./routes/auth"));
app.post("/login",require("./routes/auth"));
app.get("/getuser/:token",require("./routes/auth"))


app.listen(port, async()=>{
    const connect = await connecttoMongo()
    console.log(`Server listening to http://localhost:${port}`);
})
