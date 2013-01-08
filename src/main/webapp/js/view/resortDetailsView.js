define(     [ 'backbone', 'render!resortDetails'],
    function(  Backbone ,  template      ) {
        var ResortDetailsView = Backbone.View.extend({
            // Instance
            initialize: function() {
                this._listenToModel();
            },

            _listenToModel: function() {
                if(this.model) {
                    this.model.on('change', this.render, this);
                }
            },

            render: function() {
                var resort = this.model.getResort();
                if(resort) {
                    this.$el.html(template(resort.toJSON()));
                }
            }
        }, {
            // Class
            show: function(tripModel) {
                var result = new ResortDetailsView({model: tripModel});
                result.render();
                return result;
            }
        });

        return ResortDetailsView;
    });
