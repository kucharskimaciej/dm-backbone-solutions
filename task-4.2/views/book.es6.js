var BookView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: _.template(`
<div class="row">
    <div class="col-sm-2">
        <img src="<%= picture  %>"/>
    </div>
    <div class="col-sm-10">
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
    </div>
</div>
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

export default BookView;