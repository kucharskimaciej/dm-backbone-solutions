var User = Backbone.Model.extend({
    validation: {
        name: {
            required: true,
            minLength: 4
        },
        city: {
            required: true,
            oneOf: ['Paradise', 'of Angels']
        },
        address: {
            required: true
        },
        zip: {
            required: true,
            pattern: /^\d\d-\d\d\d$/,
            msg: 'Zip code must be in XX-XXX format'
        }
    }
});

export default User;