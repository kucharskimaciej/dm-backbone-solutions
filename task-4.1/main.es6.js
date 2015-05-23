import JST from './templates.es6.js';

_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

import Books from './collections/books.es6.js';
import BooksView from './views/books.es6.js';

var books = new Books([
    {
        author: 'The Best One',
        title: 'Such a book!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut dolorem doloribus impedit iure nobis sit? Beatae consequuntur eius fugiat impedit inventore maiores nesciunt quia saepe similique! Ex, minus, recusandae.',
        price: 19.99,
        ISBN: 1112
    },
    {
        author: 'Not Tolkien',
        title: 'Not The Lord of Rings',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut dolorem doloribus impedit iure nobis sit? Beatae consequuntur eius fugiat impedit inventore maiores nesciunt quia saepe similique! Ex, minus, recusandae.',
        price: 99.99,
        ISBN: 1113
    },
    {
        author: 'JK Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut dolorem doloribus impedit iure nobis sit? Beatae consequuntur eius fugiat impedit inventore maiores nesciunt quia saepe similique! Ex, minus, recusandae.',
        price: 9.99,
        ISBN: 1114
    }
]);

var booksView = new BooksView({
    collection: books
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