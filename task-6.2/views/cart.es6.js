import BookView from './cart_book.es6.js';
import {cart} from '../templates.es6.js';

export default Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'list-group',
    childView: BookView
});

