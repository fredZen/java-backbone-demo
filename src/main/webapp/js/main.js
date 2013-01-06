require(     ['router', 'model/greetingModel'],
    function ( router ,        GreetingModel ) {
        router.init();
        // Let's kick off the application
        var greeting = new GreetingModel();
        greeting.on('change', function () {
            alert(greeting.getMessage());
        });
        greeting.fetch();
    });
