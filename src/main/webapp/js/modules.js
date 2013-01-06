require.paths = {
    // Major libraries
    jquery: 'lib/jquery/jquery-1.8.3-min',
    underscore: 'lib/lodash/lodash-1.0.0.rc3-min',
    backbone: 'lib/backbone/backbone-0.9.9-min',
    json2: 'lib/json2/json2'
};

require.shim = {
    'backbone': {
        deps: ['underscore', 'jquery', 'json2'],
        exports: 'Backbone'
    }
};
