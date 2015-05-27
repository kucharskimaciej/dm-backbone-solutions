export default {
    runSort: function (byWhat, desc) {
        var models;

        models = this.sortBy(byWhat);
        if(desc) {
            models = models.reverse();
        }

        return new this.constructor(models);
    }
};