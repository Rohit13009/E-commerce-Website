const express=require("express");
const homeController = require("../controller/homePage");
const productsController = require("../controller/productsPage");
const product_details = require("../controller/product_details");
const cart = require("../controller/cart");
const addProducts = require("../controller/addProducts")
const router=express.Router();


router.get("/",homeController.homePage);

router.get("/products",productsController.productsPage);

router.get("/product_details/:product_id",product_details.ProductDetailsPage);

router.get("/cart",cart.cartPage);

router.get("/addProducts",addProducts.addProducts)


module.exports=router;
