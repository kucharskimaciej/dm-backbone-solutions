import App from '../application.es6.js';
import Cart from '../collections/cart.es6.js';

export default (function () {

    var cart;

    cart = new Cart();

    App.commands.setHandler("cart:add", (model) => {
        // allow duplicate models in cart by removing the id
        var dupe = _.omit(model.toJSON(), "id");
        cart.add(dupe);
    });

    App.commands.setHandler("cart:remove", (model) => cart.remove(model));

    App.reqres.setHandler("cart", () => cart);
}());