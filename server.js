const express = require('express')
const app = express();
const InventoryModel = require("./schema");
const mongoose = require("mongoose");
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/inventory');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


app.get('/', (req, res) => {
    res.send('Working')
})

app.post("/Product", async (req, res) => {
    const product = new InventoryModel(req.body);
    try {
    //    let result  =  await product.insertMany();
    await product.collection.insertMany(req.body)
    res.status(200).send('Successfully Added')
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/removeProduct", async (req, res) => {
    try {
   await InventoryModel.deleteOne({},{"productId":req.query.productId})
    res.status(200).send('Successfully deleted')
    } catch (error) {
        res.status(500).send(error);
    }
});



app.listen(8080, () => { console.log('server started on http://localhost:8080') })
