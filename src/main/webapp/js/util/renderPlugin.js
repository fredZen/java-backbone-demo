define(     ['underscore'],
    function( _          ) {
        return {
            load : function(name, req, load, config) {
                req([ 'text!template/' + name + '.html'], function(value) {
                    load(_.template(value));
                });
            }
        };
    });
