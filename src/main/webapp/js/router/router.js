/*
 * 'module' allows us to get 'per module' configuration from the jsp
 * see http://requirejs.org/docs/api.html#config-moduleconfig
 */
define(     ['backbone', 'module', 'require'],
    function( Backbone , module  ,  require ) {
        var baseUrl = module.config().baseUrl + "/",
            AppRouter = Backbone.Router.extend({
                    routes: {
                        '': 'index'
                    },

                    init: function() {
                        Backbone.history.start({
                            root : baseUrl,
                            pushState: true
                        });
                    },

                    index: function() {
                        require(    ['driver/tripSelectorDriver'],
                            function(         TripSelectorDriver) {
                                TripSelectorDriver.startEmpty();
                            });
                    }
                }),
            singleton =  new AppRouter();

        return singleton;
    });
