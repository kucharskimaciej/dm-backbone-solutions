import Region from '../region.es6.js';
import {layout} from '../templates.es6.js';

var LayoutView = Backbone.View.extend({
    template: layout,
    initialize: function() {
        this.render();
    },
    initRegions: function() {
        this.booksRegion = new Region(this.$("[books]"));
        this.cartRegion = new Region(this.$("[cart]"));
    },
    render: function() {
        this.$el.html(this.template());
        this.initRegions();
    }
});

export default LayoutView;