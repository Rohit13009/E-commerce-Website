const db = require("../database/mysql");

module.exports = class Shop{

    static shopHomePage(){
       return db.execute('SELECT * FROM blogs');
    }

    static productsPageModule(){
        return db.execute('SELECT * FROM shopnormalproducts');
    }

    static productDetail(id){
        return db.execute(`SELECT * FROM shopnormalproducts where id="${id}"`);
    }

    static shopProductDetailsPage(){
        return db.execute(`SELECT * FROM shopnormalproducts`);
    }

    static shopCart(){
        return db.execute(`SELECT * FROM shopnormalproducts`);
    }
}