require(     ['router', 'view/mainMenuView', 'model/resortCollection', 'view/resortSelectorView', 'jquery'],
    function ( router ,       MainMenuView ,        ResortCollection ,       ResortSelectorView , $       ) {
        var resorts, view;

        // Let's kick off the application
        router.init();
        MainMenuView.init();

        resorts = ResortCollection.available();
        view = ResortSelectorView.show(resorts);

        $("#main").append(view.$el);

        resorts.fetch();
    });
