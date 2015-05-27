import BookView from './book.es6.js';
import {books} from '../templates.es6.js';

var BooksView = Marionette.CompositeView.extend({
    template: books,
    events: {
        'keyup [filter]': 'onFilter',
        'click [action=sort]': 'onSort'
    },
    initialize: function () {
        this._collection = this.collection;
    },
    sorting: {
        by: 'author',
        desc: false
    },
    childView: BookView,
    childViewContainer: '.list-group',
    runFilter: function (predicate) {
        return this._collection.runFilter(predicate);
    },
    runSort: function (sort) {
        this.sorting = sort;
        return this.collection.runSort(sort.by, sort.desc);
    },
    onFilter: function () {
        var filter;
        filter = this.$('[filter]').val().toLowerCase();

        this.collection = this.runFilter(filter).runSort(this.sorting.by, this.sorting.desc);
        this._renderChildren();
    },
    onSort: function (ev) {
        var button = this.$(ev.currentTarget);

        var sorting = {
            by: button.attr('by'),
            desc: !this.sorting.desc
        };

        button.find('i')
            .toggleClass('glyphicon-chevron-up')
            .toggleClass('glyphicon-chevron-down');

        this.collection = this.runSort(sorting);
        this._renderChildren();
    }
});

export default BooksView;