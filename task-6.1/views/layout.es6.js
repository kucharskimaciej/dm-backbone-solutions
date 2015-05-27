import {layout} from '../templates.es6.js';

var LayoutView = Marionette.LayoutView.extend({
    template: layout,
    regions: {
        booksRegion: "[books]",
        cartRegion: "[cart]"
    }
});

export default LayoutView;