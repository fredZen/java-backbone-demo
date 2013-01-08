define(     [ 'backbone', 'render!tripSelector', './resortSelectorView', './resortDetailsView', './accommodationSelectorView', './tripSummaryView', 'router'],
    function(  Backbone ,  template            ,    ResortSelectorView ,    ResortDetailsView ,    AccommodationSelectorView ,    TripSummaryView ,  router ) {
        var TripSelectorView = Backbone.View.extend({
            // Instance
            initialize: function() {
                var resortCollection = this.options.resortCollection;
                this.availableAccommodations = this.options.availableAccommodations;

                this.resortDetails = ResortDetailsView.show(this.model);
                this.resortSelector = ResortSelectorView.show(resortCollection);
                this.accomodationSelector = AccommodationSelectorView.show(this.availableAccommodations);
                this.tripSummary = TripSummaryView.show(this.model);

                resortCollection.on('change:active', this._updateActiveResort, this);
                this.availableAccommodations.on('change:active', this._updateActiveAccommodation, this);
            },

            _updateActiveResort: function(activeResort, isActive) {
                if(isActive) {
                    router.navigate(activeResort.id);
                    this.model.setResort(activeResort);
                    this.model.setAccommodation(undefined);
                    this.availableAccommodations.fetchAvailableForResort(activeResort.id);
                }
            },

            _updateActiveAccommodation: function(activeAccommodation, isActive) {
                if(isActive) {
                    this.model.setAccommodation(activeAccommodation);
                }
            },

            render: function() {
                this.$el.html(template());
                this.$("#resortSelector").replaceWith(this.resortSelector.$el);
                this.$("#resortDetails").replaceWith(this.resortDetails.$el);
                this.$("#accommodationSelector").replaceWith(this.accomodationSelector.$el);
                this.$("#tripSummary").replaceWith(this.tripSummary.$el);
            }
        }, {
            // Class
            show: function(tripModel, resortCollection, availableAccommodations) {
                var result = new TripSelectorView({
                        model: tripModel,
                        resortCollection: resortCollection,
                        availableAccommodations: availableAccommodations
                    });
                result.render();
                return result;
            }
        });

        return TripSelectorView;
    });
