import Bus from '../bus.es6.js';

var BookView = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: _.template(`
<div class="row">
    <div class="col-sm-2">
        <img src="<%= picture  %>"/>
    </div>
    <div class="col-sm-10">
        <h4 class="list-group-item-heading"><a href="#/books/<%= id %>"><%= title %></a></h4>
        <aside><strong>Author: </strong><%= author %></aside>
        <% if(state.showDetails) { %>
            <p class="description"><%= description %></p>
            <p>
                <strong>Price: </strong> $<%= price %><br/>
                <strong>ISBN: </strong> <%= ISBN %><br/>
            </p>
        <% } %>
        <button class="btn btn-sm btn-success" action="add">
            Add to cart
        </button>
        <button class="btn btn-sm btn-default" action="toggle">
            <%= state.showDetails ? 'Hide details' : 'Show details' %>
        </button>
    </div>
</div>
    `),
    ui: {
        detailsToggle: "[action=toggle]",
        cart: "[action=add]"
    },
    triggers: {
        'click @ui.detailsToggle' : 'toggle:details',
        'click @ui.cart' : 'add:to:cart'
    },
    templateHelpers: function () {
        return {
            state: this.state
        }
    },
    initialize: function() {
        this.state = {
            showDetails: false
        };
    },
    onToggleDetails: function () {
        this.state.showDetails = !this.state.showDetails;
        this.render();
    },
    onAddToCart: function () {
        Bus.trigger("cart:add", this.model)
    }
});

export default BookView;