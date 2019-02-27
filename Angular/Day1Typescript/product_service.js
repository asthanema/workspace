"use strict";
exports.__esModule = true;
var store_1 = require("./store");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.add = function (p) {
        store_1.products.push(p);
        return true;
    };
    ProductService.prototype.findAll = function () {
        return store_1.products;
    };
    ProductService.prototype.findByCode = function (code) {
        store_1.products.forEach(function (element) {
            if (element.code == code)
                return element.name;
        });
    };
    ProductService.prototype.remove = function (code) {
        return null;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
var obj = new ProductService();
console.log(obj.findByCode("1"));
