define(     [ 'backbone', 'render!accommodationSelector', './accommodationPillView'],
    function(  Backbone ,  template            ,      AccommodationView     ) {
        var AccommodationSelectorView = Backbone.View.extend({
            // Instance
            initialize: function() {
                this._listenToModel();
            },

            _listenToModel: function() {
                if(this.model) {
                    this.model.on('reset', this.render, this);
                }
            },

            render: function() {
                var that = this;
                this.$el.html(template());
                this.model.each(function(accommodation) {
                    var view = AccommodationView.show(accommodation);
                    that.$("#accommodations").append(view.$el);
                });
            }
        }, {
            // Class
            show: function(accommodationCollection) {
                var result = new AccommodationSelectorView({model: accommodationCollection});
                result.render();
                return result;
            }
        });

        return AccommodationSelectorView;
    });
