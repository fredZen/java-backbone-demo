define(     [ 'backbone', 'render!resort'],
    function(  Backbone ,  template      ) {
        var ResortView = Backbone.View.extend({
            // Instance
            initialize: function() {
                this._listenToModel();
            },

            setModel: function(resortModel) {
                if(this.model) {
                    this.model.off('change');
                }
                this.model = resortModel;
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
            show: function(resortModel) {
                var result = new ResortView({model: resortModel});
                result.render();
                return result;
            }
        });

        return ResortView;
    });
