import App from '../application.es6.js';
import BookView from './book.es6.js';
import { cartBook } from '../templates.es6.js';

export default BookView.extend({
    template: cartBook,

    // events from BookView are discarded
    events: {
        'click [action=remove]' : 'removeItem'
    },

    removeItem: function() {
        App.execute("cart:remove", this.model);
    }
})