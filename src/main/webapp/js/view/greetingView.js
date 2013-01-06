define(     [ 'backbone', 'render!greeting'],
    function(  Backbone ,  template        ) {
        var
            GreetingView = undefined,
            singleton = undefined;

        GreetingView = Backbone.View.extend({
            // Instance
            initialize: function() {
                this._listenToModel();
            },

            setModel: function(greetingModel) {
                if(this.model) {
                    this.model.off('change');
                }
                this.model = greetingModel;
                this._listenToModel();
            },

            _listenToModel: function() {
                if(this.model) {
                    this.model.on('change', this.render, this);
                }
            },

            render: function() {
                this.$el.html(template(this.model.toJSON()));
            }
        }, {
            // Class
            show: function(greetingModel) {
                singleton.setModel(greetingModel);
                singleton.render();
            }
        });

        singleton = new GreetingView({el: "#main"});

        return GreetingView;
    });
