define(     [ 'backbone', 'util/resource', './accommodationModel'],
    function(  Backbone ,       Resource ,    AccommodationModel ) {
        var AccommodationCollection = undefined;

        AccommodationCollection = Backbone.Collection.extend({
            // Instance
            model: AccommodationModel,

            setQualifier: function(qualifier) {
                this.url = Resource.url("accommodation/" + qualifier);
            }
        }, {
            // Class
            availableForResort: function(resortCode) {
                var result = new AccommodationCollection();
                result.setQualifier("forResort/" + resortCode);
                return result;
            }
        });
        return AccommodationCollection;
    });
