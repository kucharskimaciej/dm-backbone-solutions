import App from '../application.es6.js';
import Users from '../collections/users.es6.js';


export default (function () {

    var users;

    users = new Users();

    users.on('add', function () {
        console.table(users.models.map( m => m.attributes ));
    });

    App.reqres.setHandler("users:all", () => users);

}());