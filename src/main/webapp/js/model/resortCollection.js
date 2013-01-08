define(     [ 'backbone', 'util/resource', './resortModel'],
    function(  Backbone ,       Resource ,    ResortModel ) {
        var ResortCollection = undefined;

        ResortCollection = Backbone.Collection.extend({
            // Instance
            model: ResortModel,

            url: Resource.url("resort")
        }, {
            // Class
            available: function() {
                return new ResortCollection();
            }
        });
        return ResortCollection;
    });
