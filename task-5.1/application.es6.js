import Region from './region.es6.js';

import BookStore from './stores/books.es6.js';
import UserStore from './stores/users.es6.js';

import BooksView from './views/books.es6.js';
import UserForm from './views/user_form.s6.js';


var routes, indexHandler, customerHandler, region;

region = new Region("#root");

routes = {
    "": "index",
    "customer": "customer"
};

indexHandler = function() {
    var books = BookStore.all();
    books.fetch().then(function() {
        var view = new BooksView({
            collection: books,
            el: "#root"
        });

        Region.set(view);
    });
};

customerHandler = function() {
    var users = UserStore.all();
    var view = new UserForm({
        collection: users,
        el: "#root"
    });

    Region.set(view);
};

var ApplicationRouter = Backbone.Router
    .extend({ routes: routes })
    .extend({ index: indexHandler })
    .extend({ customer: customerHandler });


export default new ApplicationRouter();