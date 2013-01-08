define(     [ 'backbone', 'util/resource', './accommodationModel'],
    function(  Backbone ,       Resource ,    AccommodationModel ) {
        var AccommodationCollection =  Backbone.Collection.extend({
                // Instance
                model: AccommodationModel,

                initialize: function() {
                    this.on('change:active', this._updateActiveAccommodation, this);
                },

                _updateActiveAccommodation: function(activeAccommodation, isActive) {
                    var activeAccommodationType = activeAccommodation.getType();
                    if(!isActive) {
                        return;
                    }
                    this.forEach(function(accommodation) {
                        if(accommodation.getType() != activeAccommodationType) {
                            accommodation.setInactive();
                        }
                    });
                },

                fetchAvailableForResort: function(resortCode) {
                    this._setQualifier("forResort/" + resortCode);
                    this.fetch();
                },

                _setQualifier: function(qualifier) {
                    this.url = Resource.url("accommodation/" + qualifier);
                }
            });

        return AccommodationCollection;
    });
