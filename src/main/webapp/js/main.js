require(     ['router', 'view/mainMenuView', 'model/greetingModel'],
    function ( router ,       MainMenuView ,        GreetingModel ) {
        // Let's kick off the application
        router.init();
        MainMenuView.init();

        var greeting = new GreetingModel();
        greeting.on('change', function () {
            alert(greeting.getMessage());
        });
        greeting.fetch();
    });
