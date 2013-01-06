require(     ['model/greetingModel'],
    function (       GreetingModel ) {
        // Let's kick off the application
        var greeting = new GreetingModel();
        greeting.on('change', function () {
            alert(greeting.getMessage());
        });
        greeting.fetch();
    });
