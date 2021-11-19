const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.render("index");
});

router.get("/products",(req,res)=>{
    res.render("products");
});

router.get("/product_details",(req,res)=>{
    res.render("product_details");
});

router.get("/cart",(req,res)=>{
    res.render("cart");
});

router.get("/two",(req,res)=>{
    res.render("two");
});

router.get("/three",(req,res)=>{
    res.render("three");
});

router.get("/account",(req,res)=>{
    res.render("account");
});

module.exports=router;
