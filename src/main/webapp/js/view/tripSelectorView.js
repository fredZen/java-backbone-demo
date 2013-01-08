define(     [ 'backbone', 'render!tripSelector', './resortSelectorView', './resortDetailsView'],
    function(  Backbone ,  template            ,    ResortSelectorView ,    ResortDetailsView ) {
        var TripSelectorView = Backbone.View.extend({
            // Instance
            initialize: function() {
                var resortCollection = this.options.resortCollection;
                this.resortSelector = ResortSelectorView.show(resortCollection);
                this.resortDetails = ResortDetailsView.show(this.model);
                resortCollection.on('change:active', this._updateActiveResort, this);
            },

            _updateActiveResort: function(activeResort, isActive) {
                if(!isActive) {
                    return;
                }
                this.model.setResort(activeResort);
            },

            render: function() {
                this.$el.html(template());
                this.$("#resortSelector").replaceWith(this.resortSelector.$el);
                this.$("#resortDetails").replaceWith(this.resortDetails.$el);
            }
        }, {
            // Class
            show: function(tripModel, resortCollection) {
                var result = new TripSelectorView({model: tripModel, resortCollection: resortCollection});
                result.render();
                return result;
            }
        });

        return TripSelectorView;
    });
