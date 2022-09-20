import express from "express";
import axios from "axios";
const co2Router = express.Router();



function validProductCo2(productObj) {
  const productCo2 = {}
  Object.keys(productObj).map((item => {
    if(productObj[item]) {
      productCo2[item] = productObj[item]
    }
  }))
  return productCo2
}


async function productCo2Fetch(req, res) {
  const productData  = validProductCo2(req.body);
  console.log(productData,"productData")
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      "X-Api-Key": `aSaUwe2STF2YrP6YKObbW5NaRzWWCIK64VN9eJKd`,
    }
  }

  try {
    const response =  await axios.post('https://drae0rwffi.execute-api.us-east-1.amazonaws.com/prod/main/calculator',productData,config)
    if(response.status === 200){
      res.json(response.data)
    }
  } 
  catch (error) {
    console.log(error.message)
    res.send(error)
  }
  
}
co2Router.post("/product", productCo2Fetch);
co2Router.get("/products", productCo2Fetch);


export default co2Router;
