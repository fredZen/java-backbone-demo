define(     [ 'jquery', 'backbone', 'render!mainMenu', 'router/tripSelectorDriver'],
    function(  $      ,  Backbone ,  template        ,         TripSelectorDriver ) {
        var
            MainMenuView = Backbone.View.extend({
                // Instance
                className: "navbar navbar-fixed-top",

                events: {
                    "click #homeButton": "restart",
                    "click a": "doNothing"
                },

                restart: function() {
                    TripSelectorDriver.startEmpty();
                    return false;
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
            }),
            singleton = new MainMenuView;

        return MainMenuView;
    });
