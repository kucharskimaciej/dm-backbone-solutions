import FormView from './form.es6.js';
import {form} from '../templates.es6.js';

var UserFormView = FormView.extend({
    template: form
});

export default UserFormView;