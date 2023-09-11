const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require('./db/User');
const Product = require("./db/Product");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, resp) => {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
});

app.post("/login", async (req, resp) => {
    let user = await User.findOne(req.body).select("-password");
    if (req.body.email && req.body.password) {
        if (user) {
            resp.send(user)
        }
        else {
            resp.send({ result: "No user found" });
        }
    }
    else {
        resp.send({ result: "No user found" });
    }
});

app.post("/add-product", async (req, resp) => {
    const product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
});

app.get("/product", async (req, resp) => {
    const products = await Product.find();
    if(products.length>0){
        resp.send(products);
    }
    else{
       resp.send({result:"Product not found"});
    }
});

app.delete("/product/:id", async (req, resp) => {
    let data = await Product.deleteOne({_id:req.params.id});
    resp.send(data);
 
});

app.get("/product/:id", async (req, resp) => {
    const res = await Product.findOne({_id:req.params.id});
    if(res){
        resp.send(res);
    }
    else{
       resp.send({result:"Product not found"});
    }
});


app.put("/product/:id",async (req,resp)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},{$set:req.body}
    )
    resp.send(result);
})


app.get("/search/:key",async(req,resp)=>{
    let data=await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"company":{$regex:req.params.key}}
            ]
        }
    );
    resp.send(data);
});

app.listen(4000); 