import JST from './templates.es6.js';

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