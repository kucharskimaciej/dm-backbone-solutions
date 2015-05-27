import User from '../models/user.es6.js';

var Users = Backbone.Collection.extend({
    model: User
});

export default Users;