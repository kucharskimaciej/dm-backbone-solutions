import JST from './templates.es6.js';
import Bus from './bus.es6.js';

_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);


import Books from './collections/books.es6.js';
import BooksView from './views/books.es6.js';

var books = new Books();
books.fetch(/* get params here; check out the lecture or docs */)
    .then(function() {
        var booksView = new BooksView({
            collection: books
        });
    });



import Users from './collections/users.es6.js';
import UserForm from './views/user_form.s6.js';

var users = new Users;
var userForm = new UserForm({
    collection: users,
    el: '#user'
});

users.on('add', function () {
   console.table(users.models.map( m => m.attributes ));
});



import Cart from './collections/cart.es6.js';
import CartView from './views/cart.es6.js';

var cart = new Cart();
var cartView = new CartView({
   collection: cart
});

Bus.on("cart:add", function(model) {
    // allow duplicate models in cart by removing the id
    var dupe = _.omit(model.toJSON(), "id");
    cart.add(dupe);
});

Bus.on("cart:remove", function(model) {
    cart.remove(model);
});