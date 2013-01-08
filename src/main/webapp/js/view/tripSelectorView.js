define(     [ 'backbone', 'render!tripSelector', './resortSelectorView', './resortDetailsView', './accommodationSelectorView', 'model/accommodationCollection'],
    function(  Backbone ,  template            ,    ResortSelectorView ,    ResortDetailsView ,    AccommodationSelectorView ,     AccommodationCollection ) {
        var TripSelectorView = Backbone.View.extend({
            // Instance
            initialize: function() {
                var resortCollection = this.options.resortCollection;

                this.availabeAccommodations = new AccommodationCollection();

                this.resortDetails = ResortDetailsView.show(this.model);
                this.resortSelector = ResortSelectorView.show(resortCollection);
                this.accomodationSelector = AccommodationSelectorView.show(this.availabeAccommodations);

                resortCollection.on('change:active', this._updateActiveAccommodation, this);
            },

            _updateActiveAccommodation: function(activeResort, isActive) {
                if(!isActive) {
                    return;
                }
                this.model.setResort(activeResort);
                this.availabeAccommodations.fetchAvailableForResort(activeResort.id);
            },

            render: function() {
                this.$el.html(template());
                this.$("#resortSelector").replaceWith(this.resortSelector.$el);
                this.$("#resortDetails").replaceWith(this.resortDetails.$el);
                this.$("#accommodationSelector").replaceWith(this.accomodationSelector.$el);
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
