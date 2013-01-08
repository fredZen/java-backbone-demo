define(     [ 'backbone', 'util/resource', './resortModel'],
    function(  Backbone ,       Resource ,    ResortModel ) {
        var ResortCollection =  Backbone.Collection.extend({
                // Instance
                model: ResortModel,

                url: Resource.url("resort"),

                initialize: function() {
                    this.on('change:active', this._updateActiveAccommodation, this);
                },

                _updateActiveAccommodation: function(activeResort, isActive) {
                    if(!isActive) {
                        return;
                    }
                    this.forEach(function(resort) {
                        if(resort.id != activeResort.id) {
                            resort.setInactive();
                        }
                    });
                }
            }, {
                // Class
                available: function() {
                    return new ResortCollection();
                }
            });

        return ResortCollection;
    });
