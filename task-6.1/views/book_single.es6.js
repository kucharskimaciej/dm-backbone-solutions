import BookView from './book.es6.js';
import {singleBook} from '../templates.es6.js';

export default BookView.extend({
    template: singleBook,
    initialize: function() {
        // override
    }
});