let productForm = document.querySelector("#product-form");
let productTable = document.querySelector("#productTable");
let btn = document.querySelector(".btn");
let productName = document.querySelector("#product-name");
let ProductPrice = document.querySelector("#product-price");
let ManufacturingDate = document.querySelector("#product-M-Date");
let ProductAddress = document.querySelector("#product-Address");
let ProductOutofStock = document.querySelector("#Stock");
let productList = [];

btn.addEventListener("click", function () {
    
    let productUser ={
        product_Name: productName.value,
        Product_Price: ProductPrice.value,
        Manufacturing_Date: ManufacturingDate.value,
        Product_Address: ProductAddress.value,
        Product_Outof_Stock: ProductOutofStock.value,
    };
    productList.push(productUser);
    
    console.log( productList);
    let  product_List =  productList
    .map(function (value, index) {
        return `<tr>
        <td>${value.product_Name}</td>
        <td>${value.Product_Price}</td>
        <td>${value.Manufacturing_Date}</td>
        <td>${value.Product_Address}</td>
        <td>${value.Product_Outof_Stock}</td>
        </tr>`;
    })
    .join("");

    tbody.innerHTML =  product_List;

});