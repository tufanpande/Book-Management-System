require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes");
const mongoose= require("mongoose");
const PORT= Number(process.env.PORT);
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/", indexRouter);



mongoose.connect(process.env.DB).then(()=>{
    console.log("Database is connected");
});


app.use((err,req, res,next)=>{
    err= err ? err.toString() :"something went wrong...";
    res.status(500).json({msg: err});
});
app.listen(PORT,()=>{
    console.log(`Application is running  on ${PORT}`);
});

