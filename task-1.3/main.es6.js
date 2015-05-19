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
        this.$el.html(this.template(this.model));
        return this;
    }
});
var BooksView = Backbone.View.extend({
    el: '#books',
    initialize: function () {
        this.render();
    },
    render: function () {
        this.collection.forEach((book) => {
            var view = new BookView({
                model: book
            });

            this.$el.append(view.render().el);
        })
    }
});

var books = [
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
];

var booksView = new BooksView({
    collection: books
});