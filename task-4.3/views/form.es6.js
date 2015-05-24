var FormView = Backbone.View.extend({

    events: {
        'submit' : 'onSubmit',
        'keyup' : 'runValidation'
    },
    initialize: function () {
        this.render();
    },
    runValidation: function () {
        this.clearErrors();
        var model = new this.collection.model(Backbone.Syphon.serialize(this));
        var errors = model.validate();

        if(!_.isEmpty(errors)) {
            this.showErrors(errors);
            return false;
        }

        return true;
    },
    clearErrors: function () {
        this.$('.help-block').remove();
        this.$('.form-group').removeClass('has-error');
        this.$('[type=submit]').removeAttr('disabled');
    },
    showErrors: function (errors) {
        this.$('form [type=submit]').attr('disabled', 'disabled');
        Object.keys(errors).forEach((err) => {
            var help = $('<span class="help-block">').text(errors[err]);
            this.$('[name=' + err +']').parents('.form-group')
                .addClass('has-error')
                .append(help)
        });
    },
    onSubmit: function (ev) {
        ev.preventDefault();

        if(!this.runValidation()) return;

        var attrs = Backbone.Syphon.serialize(this);

        var model = new this.collection.model(attrs);

        this.collection.add(model);
        this.render();
    },
    render: function () {
        this.$el.html(this.template());
        return this;
    }
});

export default FormView;