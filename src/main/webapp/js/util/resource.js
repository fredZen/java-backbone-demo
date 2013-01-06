define(     [ 'module'],
    function(  module ) {
        var baseUrl = module.config().baseUrl;
        return {
            url : function(path) {
                return baseUrl + "/" + path;
            }
        };
    });
