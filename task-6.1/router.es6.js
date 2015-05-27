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
    var books = BookStore.all();
    books.fetch().then(function() {
        var layout = new Layout();
        App.root.show(layout);

        var bookView = new BooksView({
            collection: books
        });

        var cartView = new CartView({
            collection: CartStore.all()
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
    BookStore.all().fetch().then(function() {
        var book, bookView;

        book = BookStore.one(id);
        bookView = new SingleBookView({
            model: book
        });

        App.root.show(bookView);
    });
};

customerHandler = function() {
    var users = UserStore.all();
    var view = new UserForm({
        collection: users
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