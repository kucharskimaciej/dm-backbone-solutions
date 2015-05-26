import Bus from '../bus.es6.js';
import Books from '../collections/books.es6.js';

export default (function () {

    var books;

    books = new Books();

    return {
        all: function() {
            return books;
        },
        one: function(id) {
            return id;
        }
    };
}());