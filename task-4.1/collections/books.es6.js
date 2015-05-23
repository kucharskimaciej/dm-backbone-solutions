import Book from '../models/book.es6.js';

var Books = Backbone.Collection.extend({
    model: Book,
    runFilter: function (predicate) {
        var models;
        models = this.filter((item) => {
            return JSON.stringify(item).toLowerCase().indexOf(predicate) != -1;
        });

        return new Books(models);
    },
    runSort: function (byWhat, desc) {
        var models;

        models = this.sortBy(byWhat);
        if(desc) {
            models = models.reverse();
        }

        return new Books(models);
    }
});

export default Books;