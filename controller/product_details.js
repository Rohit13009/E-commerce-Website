
const Shop = require("../module/shop")

exports.ProductDetailsPage = (req, res) => {
    const prodId = req.params.product_id;
    console.log("prod",prodId)
    Shop.productDetail(prodId)
        .then(([detailData]) => {   
            res.render("shop/product_details", {
                data: detailData[0]
            }
            )
        })
        .catch()
}
