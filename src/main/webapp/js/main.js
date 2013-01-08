require(     ['router/router', 'view/mainMenuView'],
    function (        router ,       MainMenuView ) {
        // Let's kick off the application
        router.init();
        MainMenuView.init();
    });
