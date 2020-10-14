var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.foobar = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Die ID ist', _this.id);
        }, 2000);
        return '';
    };
    return Customer;
}());
export { Customer };
//# sourceMappingURL=customer.js.map