import JST from './templates.es6.js';

_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

var Book = Backbone.Model.extend({});

var Books = Backbone.Collection.extend({
    model: Book,
    runFilter: function (predicate) {
        var models;
        models = this.filter((item) => {
            return JSON.stringify(item).toLowerCase().indexOf(predicate) != -1;
        });

        return new Books(models);
    },
    runSort: function (byWhat, desc) {
        var models;

        models = this.sortBy(byWhat);
        if(desc) {
            models = models.reverse();
        }

        return new Books(models);
    }
});
var User = Backbone.Model.extend({
    validation: {
        name: {
            required: true
        },
        city: {
            required: true
        },
        address: {
            required: true
        },
        zip: {
            required: true
        }
    }
});
var Users = Backbone.Collection.extend({
    model: User
});

var BookView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: _.template(`
    <h4 class="list-group-item-heading"><%= title %></h4>
    <aside><strong>Author: </strong><%= author %></aside>
    <% if(state.showDetails) { %>
        <p class="description"><%= description %></p>
        <p>
            <strong>Price: </strong> $<%= price %><br/>
            <strong>ISBN: </strong> <%= ISBN %><br/>
        </p>
    <% } %>
    <button class="btn btn-sm btn-default" action="toggle">
        <%= state.showDetails ? 'Hide details' : 'Show details' %>
    </button>
    `),
    events: {
        'click [action=toggle]' : 'toggleDetails'
    },
    initialize: function () {
        this.state = {
            showDetails: false
        };
        this.render();
    },
    render: function () {
        var data = _.extend(this.model.attributes, {
            state: this.state
        });
        this.$el.html(this.template(data));
        return this;
    },
    toggleDetails: function () {
        this.state.showDetails = !this.state.showDetails;
        this.render();
    }
});
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

var FormView = Backbone.View.extend({

    events: {
        'submit' : 'onSubmit',
        'keyup' : 'runValidation'
    },
    initialize: function () {
        this.render();
    },
    runValidation: function () {
        this.clearErrors();
        var model = new this.collection.model(Backbone.Syphon.serialize(this));
        var errors = model.validate();

        if(!_.isEmpty(errors)) {
            this.showErrors(errors);
            return false;
        }

        return true;
    },
    clearErrors: function () {
        this.$('.help-block').remove();
        this.$('.form-group').removeClass('has-error');
        this.$('[type=submit]').removeAttr('disabled');
    },
    showErrors: function (errors) {
        this.$('form [type=submit]').attr('disabled', 'disabled');
        Object.keys(errors).forEach((err) => {
            var help = $('<span class="help-block">').text(errors[err]);
            this.$('[name=' + err +']').parents('.form-group')
                .addClass('has-error')
                .append(help)
        });
    },
    onSubmit: function (ev) {
        ev.preventDefault();

        if(!this.runValidation()) return;

        var attrs = Backbone.Syphon.serialize(this);

        var model = new this.collection.model(attrs);

        this.collection.add(model);
        this.render();
    },
    render: function () {
        this.$el.html(this.template());
        return this;
    }
});

var UserFormView = FormView.extend({
    template: JST['form']
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


var users = new Users;
var userForm = new UserFormView({
    collection: users,
    el: '#user'
});

users.on('add', function () {
   console.table(users.models.map( m => m.attributes ));
});