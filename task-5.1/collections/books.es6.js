import Book from '../models/book.es6.js';
import Sortable from '../mixins/sortable.es6.js'
import Filterable from '../mixins/filterable.es6.js'

var Books = Backbone.Collection.extend({
    model: Book,
    url: 'books.json',
    parse: function(response) {
        return response.results;
    }
}).extend(Sortable).extend(Filterable);

// alternatively using the underscore library
// _.extend(Books.prototype, Sortable);

export default Books;