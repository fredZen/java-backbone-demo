define(     ['backbone', 'module', 'require'],
    function( Backbone , module  ,  require ) {
        var baseUrl = module.config().baseUrl + "/",
            AppRouter = Backbone.Router.extend({
                    routes: {
                    },

                    init: function() {
                        Backbone.history.start({
                            root : baseUrl,
                            pushState: true
                        });
                    }
                }),
            singleton =  new AppRouter();

        return singleton;
    });
