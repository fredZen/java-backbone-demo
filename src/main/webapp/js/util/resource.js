/*
 * 'module' allows us to get 'per module' configuration from the jsp
 * see http://requirejs.org/docs/api.html#config-moduleconfig
 */
define(     [ 'module'],
    function(  module ) {
        var baseUrl = module.config().baseUrl;
        return {
            url : function(path) {
                return baseUrl + "/" + path;
            }
        };
    });
