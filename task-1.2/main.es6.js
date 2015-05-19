var BookView = Backbone.View.extend({
    el: '#books',
    template: _.template(`
    <li class="list-group-item">
        <h4 class="list-group-item-heading"><%= title %></h4>
        <aside><strong>Author: </strong><%= author %></aside>
        <p class="description"><%= description %></p>
        <p>
            <strong>Price: </strong> $<%= price %><br/>
            <strong>ISBN: </strong> <%= ISBN %><br/>
        </p>
    </li>
    `),
    initialize: function () {
        this.book = {
            author: 'The Best One',
            title: 'Such a book!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut dolorem doloribus impedit iure nobis sit? Beatae consequuntur eius fugiat impedit inventore maiores nesciunt quia saepe similique! Ex, minus, recusandae.',
            price: 9.99,
            ISBN: 1111
        }
    },
    render: function () {
        this.$el.append(this.template(this.book));
    }
});

var book = new BookView;
book.render();