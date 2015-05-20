var Book = Backbone.Model.extend({});

var Books = Backbone.Collection.extend({
    model: Book,
    runFilter: function (predicate) {
        var models;
        models = this.filter((item) => {
            return JSON.stringify(item).toLowerCase().indexOf(predicate) != -1;
        });

        return new Books(models);
    }
});

var BookView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: _.template(`
    <h4 class="list-group-item-heading"><%= title %></h4>
    <aside><strong>Author: </strong><%= author %></aside>
    <p class="description"><%= description %></p>
    <p>
        <strong>Price: </strong> $<%= price %><br/>
        <strong>ISBN: </strong> <%= ISBN %><br/>
    </p>
    `),
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
var BooksView = Backbone.View.extend({
    el: '#books',
    events: {
        'keyup [filter]': 'onFilter'
    },
    initialize: function () {
        this.render();
        this._collection = this.collection;
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
    onFilter: function () {
        var filter;
        filter = this.$('[filter]').val().toLowerCase();

        this.collection = this._collection.runFilter(filter);
        this.render();
    }
});

var books = new Books([
    {
        author: 'The Best One',
        title: 'Such a book!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut dolorem doloribus impedit iure nobis sit? Beatae consequuntur eius fugiat impedit inventore maiores nesciunt quia saepe similique! Ex, minus, recusandae.',
        price: 19.99,
        ISBN: 1112
    },
    {
        author: 'Not Tolkien',
        title: 'Not The Lord of Rings',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut dolorem doloribus impedit iure nobis sit? Beatae consequuntur eius fugiat impedit inventore maiores nesciunt quia saepe similique! Ex, minus, recusandae.',
        price: 99.99,
        ISBN: 1113
    },
    {
        author: 'JK Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut dolorem doloribus impedit iure nobis sit? Beatae consequuntur eius fugiat impedit inventore maiores nesciunt quia saepe similique! Ex, minus, recusandae.',
        price: 9.99,
        ISBN: 1114
    }
]);

var booksView = new BooksView({
    collection: books
});