/*
 *   The reason to use the `idAttribute` and then persist the `trackId` property while parsing
 *   is an undocumented bug in Backbone (appeared in 1.1.0, not fixed in current version[1.2.0]),
 *   referenced in #3533, #3638, #3529
 * */
var Book = Backbone.Model.extend({
    idAttribute: 'trackId',
    parse: function(attrs) {
        return {
            trackId: attrs.trackId,
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