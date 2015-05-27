import App from './application.es6.js';

import BookStore from './stores/books.es6.js';
import UserStore from './stores/users.es6.js';
import CartStore from './stores/cart.es6.js';

import Layout from './views/layout.es6.js';
import BooksView from './views/books.es6.js';
import SingleBookView from './views/book_single.es6.js';
import UserForm from './views/user_form.s6.js';
import CartView from './views/cart.es6.js';

var routes, indexHandler, itemHandler, customerHandler;

routes = {
    "": "index",
    "books/:id": "item",
    "customer": "customer"
};

indexHandler = function() {
    var books = App.request("books:all");
    books.fetch().then(function() {
        var layout = new Layout();
        App.root.show(layout);

        var bookView = new BooksView({
            collection: books
        });

        var cartView = new CartView({
            collection: App.request("cart")
        });

        layout.booksRegion.show(bookView);
        layout.cartRegion.show(cartView);

    });
};

itemHandler = function(id) {
    /*
    *   Possibly better solution would be to fetch just
    *   the book with specified ID, but our `backend` doesn't support that
    */
    App.request("books:all").fetch().then(function() {
        var book, bookView;

        book = App.request("books:one", id);
        bookView = new SingleBookView({
            model: book
        });

        App.root.show(bookView);
    });
};

customerHandler = function() {
    var view = new UserForm({
        collection: App.request("users:all")
    });

    App.root.show(view);
};

var ApplicationRouter = Marionette.AppRouter
    .extend({ appRoutes: routes })
    .extend({ controller: {
        index: indexHandler,
        item: itemHandler,
        customer: customerHandler
    }});


export default new ApplicationRouter();