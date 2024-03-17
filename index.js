const express = require("express");
const cors = require("cors");
const calculateDeliveryCost  = require("./GetDeliveryCost");
const validateInputFormat = require("./middleware/ValidateInput");

const app = express();


app.use(express.json());
app.use(cors());


app.post("/getDeliveryCost", validateInputFormat, (req,res)=>{
    const inputData = req.body;
    // console.log(inputData);
    res.json(calculateDeliveryCost(inputData));
})


app.use((req, res, next)=> {
    res.status(404).json({ error: "Not Found or Incorrect Path" });
  });

app.use((err, req, res, next) =>{
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error"});
});


app.listen(3000, ()=>{
    console.log("Server running on port  3000");
})