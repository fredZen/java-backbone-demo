require(     ['router', 'view/mainMenuView', 'model/resortCollection', 'model/tripModel', 'view/tripSelectorView', 'jquery'],
    function ( router ,       MainMenuView ,        ResortCollection ,        TripModel,    TripSelectorView , $       ) {
        var resorts, trip, view;

        // Let's kick off the application
        router.init();
        MainMenuView.init();

        resorts = ResortCollection.available();
        trip = TripModel.empty();
        view = TripSelectorView.show(trip, resorts);

        $("#main").append(view.$el);

        resorts.fetch();
    });
