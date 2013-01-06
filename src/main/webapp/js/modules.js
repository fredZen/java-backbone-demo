require.paths = {
    // Major libraries
    jquery: 'lib/jquery/jquery-1.8.3-min',
    underscore: 'lib/lodash/lodash-1.0.0.rc3-min',
    backbone: 'lib/backbone/backbone-0.9.9-min',
    bootstrap: 'lib/bootstrap/bootstrap.min',
    json2: 'lib/json2/json2',

    // Require.js plugins
    text: 'lib/require/text-2.0.3',
    render: 'util/renderPlugin',

    // Just a shortcut so we can put our html outside the js dir
    template: '../template'
};

require.shim = {
    'backbone': {
        deps: ['underscore', 'jquery', 'json2'],
        exports: 'Backbone'
    },
    'bootstrap': ['jquery']
};
