let menuitems=document.getElementById("menuItems");

menuitems.style.maxHeight="0px";

function menutoggle(){
    if(menuitems.style.maxHeight=="0px"){
        menuitems.style.maxHeight="200px"
    }else
    {menuitems.style.maxHeight="0px"}
}
//------js for product img-------
let ProductImg=document.getElementById("ProductImg");
let SmallImg=document.getElementsByClassName("small-img");
SmallImg[0].onclick=function(){
    ProductImg.src=SmallImg[0].src;
};
SmallImg[1].onclick=function(){
    ProductImg.src=SmallImg[1].src;
};
SmallImg[2].onclick=function(){
    ProductImg.src=SmallImg[2].src;
};
SmallImg[3].onclick=function(){
    ProductImg.src=SmallImg[3].src;
};

//js for toogle form

var loginForm=document.getElementById("loginForm");
var regForm=document.getElementById("regForm");
var indicator=document.getElementById("indicator");

function register(){
    regForm.style.transform="translateX(0px)";
    loginForm.style.transform="translateX(0px)";
}

function login(){
    regForm.style.transform="translateX(300px)";
    loginForm.style.transform="translateX(3000px)";
}

