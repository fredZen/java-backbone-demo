define(     [ 'backbone', 'util/resource'],
    function(  Backbone ,       Resource ) {
        var GreetingModel = Backbone.Model.extend({
            urlRoot: Resource.url("greet"),

            getMessage: function() {
                return this.get('message');
            }
        });
        return GreetingModel;
    });
