const Shop = require("../module/shop")


exports.homePage = (req,res)=>{
    Shop.shopHomePage()
    .then(([homeData])=>{
        console.log(homeData);
        res.render("shop/homePage",{
            data:homeData
        })
    })
    .catch()
}


exports.shopProductDetailsPage = (req,res)=>{
    Shop.shopProductDetailsPage()
    .then(([productDetailsData])=>{
        res.render("shop/product_details")
    })
    .catch()
}

exports.shopCart = (req,res)=>{
    Shop.shopCart()
    .then(([shopCartData])=>{
        res.render("shop/cart");
    })
}