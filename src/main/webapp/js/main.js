require(     ['router', 'view/mainMenuView'],
    function ( router ,       MainMenuView ,         TripSelectorDriver ) {

        // Let's kick off the application
        router.init();
        MainMenuView.init();
    });
