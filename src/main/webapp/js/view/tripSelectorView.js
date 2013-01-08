define(     [ 'backbone', 'render!tripSelector', './resortSelectorView', './resortDetailsView', './accommodationSelectorView', './tripSummaryView', 'model/accommodationCollection'],
    function(  Backbone ,  template            ,    ResortSelectorView ,    ResortDetailsView ,    AccommodationSelectorView ,    TripSummaryView ,        AccommodationCollection ) {
        var TripSelectorView = Backbone.View.extend({
            // Instance
            initialize: function() {
                var resortCollection = this.options.resortCollection;

                this.availabeAccommodations = new AccommodationCollection();

                this.resortDetails = ResortDetailsView.show(this.model);
                this.resortSelector = ResortSelectorView.show(resortCollection);
                this.accomodationSelector = AccommodationSelectorView.show(this.availabeAccommodations);
                this.tripSummary = TripSummaryView.show(this.model);

                resortCollection.on('change:active', this._updateActiveResort, this);
                this.availabeAccommodations.on('change:active', this._updateActiveAccommodation, this);
            },

            _updateActiveResort: function(activeResort, isActive) {
                if(isActive) {
                    this.model.setResort(activeResort);
                    this.model.setAccommodation(undefined);
                    this.availabeAccommodations.fetchAvailableForResort(activeResort.id);
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
            show: function(tripModel, resortCollection) {
                var result = new TripSelectorView({model: tripModel, resortCollection: resortCollection});
                result.render();
                return result;
            }
        });

        return TripSelectorView;
    });
