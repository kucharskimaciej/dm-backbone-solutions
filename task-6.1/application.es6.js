_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);


var App = new Marionette.Application();

App.addRegions({
    root: "#root"
});

App.on("start", function() {
    Backbone.history.start();
});

export default App;