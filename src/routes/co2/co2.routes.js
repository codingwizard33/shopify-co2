import express from "express";
import productCo2Fetch from "../../controller/productCo2Fetch";
import productsCo2Fetch from "../../controller/productsCo2Fetch";

const co2Router = express.Router();



co2Router.post("/product", productCo2Fetch);

co2Router.post("/products", productsCo2Fetch);


export default co2Router;
