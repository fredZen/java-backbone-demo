require(     ['router', 'view/mainMenuView', 'model/greetingModel', 'view/greetingView'],
    function ( router ,       MainMenuView ,        GreetingModel ,       GreetingView ) {
        // Let's kick off the application
        router.init();
        MainMenuView.init();

        var greeting = new GreetingModel();
        GreetingView.show(greeting);
        greeting.fetch();
    });
