import Bus from '../bus.es6.js';
import Cart from '../collections/cart.es6.js';

export default (function () {

    var cart;

    cart = new Cart();

    Bus.on("cart:add", function(model) {
        // allow duplicate models in cart by removing the id
        var dupe = _.omit(model.toJSON(), "id");
        cart.add(dupe);
    });

    Bus.on("cart:remove", function(model) {
        cart.remove(model);
    });


    return {
        all: function() {
            return cart;
        }
    };
}());