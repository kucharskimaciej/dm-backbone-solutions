function Region(rootElement) {
    this.$el = $(rootElement);
}

Region.prototype.clear = function() {
    if(!this.currentView) return;
    this.currentView.undelegateEvents();
    this.currentView.stopListening();
    this.currentView.remove();
};

Region.prototype.set = function(view) {
    this.clear();
    view.setElement(this.rootElement);
    view.render();
};

export default Region;