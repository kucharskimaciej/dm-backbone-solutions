import BookView from './cart_book.es6.js';
import {cart} from '../templates.es6.js';

export default Backbone.View.extend({
    el: '#cart',
    template: cart,
    initialize: function () {
        console.log('here')
        this.render();
        this.listenTo(this.collection, "add remove", this.render, this);
    },
    render: function () {
        var list, partials = $();
        this.$el.html(this.template());

        list = this.$('[item-container]');
        this.collection.forEach((book) => {
            var view = new BookView({
                model: book
            });

            partials = partials.add(view.render().el);
        });

        list.html(partials);
    }
});

