const Shop = require("../module/shop")

exports.productsPage = (req,res)=>{
    Shop.productsPageModule()
    .then(([productData])=>{
        res.render("shop/products",{
            data:productData
        })
    })
    .catch()
}