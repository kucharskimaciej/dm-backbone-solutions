import BookView from './book.es6.js';

var BooksView = Backbone.View.extend({
    el: '#books',
    events: {
        'keyup [filter]': 'onFilter',
        'click [action=sort]': 'onSort'
    },
    initialize: function () {
        this.render();
        this._collection = this.collection;
    },
    sorting: {
        by: 'author',
        desc: false
    },
    render: function () {
        var list, partials = $();

        list = this.$('.list-group');
        list.empty();
        this.collection.forEach((book) => {
            var view = new BookView({
                model: book
            });

            partials = partials.add(view.render().el);
        });

        list.html(partials);
    },
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
        this.render();
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
        this.render();
    }
});

export default BooksView;