define(     [ 'jquery', 'backbone', 'render!mainMenu'],
    function(  $      ,  Backbone ,  template        ) {
        var
            MainMenuView = undefined,
            singleton = undefined;

        MainMenuView = Backbone.View.extend({
            // Instance
            className: "navbar navbar-fixed-top",

            events: {
                "click a": "doNothing"
            },

            doNothing: function() {
                return false;
            },

            render: function() {
                this.$el.html(template());
            }
        }, {
            // Class
            init: function() {
                singleton.render();
                $("#mainMenu").replaceWith(singleton.el);
            }
        });

        singleton = new MainMenuView();

        return MainMenuView;
    });
