import Bus from '../bus.es6.js';
import Books from '../collections/books.es6.js';

export default (function () {

    var books;

    books = new Books();

    return {
        all: function() {
            return books;
        },
        one: function(obj) {
            /*
                ids are parsed from JSON so number are converted to number type in javascript
                the url params in routers are passed as string by default though,
                so it's a good practice to cast them to appropriate type
             */
            if(!_.isObject(obj)) {
                obj = { id: Number(obj) };
            }

            /*
                using Collection#findWhere in favor of Collection#get for more flexibility and more robustness.
             */
            return books.findWhere(obj);
        }
    };
}());