var Book = Backbone.Model.extend({
    parse: function(attrs) {
        return {
            id: attrs.trackId,
            title: attrs.trackName,
            author: attrs.artistName,
            description: attrs.description,
            picture: attrs.artworkUrl100,
            price: attrs.price,
            ISBN: "N/A"
        };
    }
});

export default Book;