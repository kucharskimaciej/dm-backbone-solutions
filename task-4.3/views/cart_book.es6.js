import Bus from '../bus.es6.js';
import BookView from './book.es6.js';
import { cartBook } from '../templates.es6.js';

export default BookView.extend({
    template: cartBook,

    // events from BookView are discarded
    events: {
        'click [action=remove]' : 'removeItem'
    },

    removeItem: function() {
        Bus.trigger("cart:remove", this.model);
    }
})