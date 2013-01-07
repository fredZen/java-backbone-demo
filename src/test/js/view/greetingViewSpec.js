define(     ['view/greetingView', 'model/greetingModel'],
    function(      GreetingView ,        GreetingModel ) {
    describe('GreetingView', function(){
        describe('setModel', function(){
            var
                oldModel = new GreetingModel({message: "Something"}),
                newModel = new GreetingModel({message: "Whatever"});

            it('sets the new model as the source to render from', function() {
                var view = new GreetingView({model: oldModel});

                view.setModel(newModel);
                view.render();

                expect(view.$el).toHaveText(/.*Whatever.*/);
            });

            it('starts listening to the new model', function() {
                var view = new GreetingView({model: oldModel});
                spyOn(view, 'render');

                runs(function(){
                    view.setModel(newModel);
                    newModel.set('message', "Hey");
                });

                waitsFor(function(){
                    return view.render.callCount > 0;
                }, "render to be called", 250);
            });

            it('stops listening to the old model', function() {
                var view = new GreetingView({model: oldModel});
                spyOn(view, 'render');

                view.setModel(newModel);
                oldModel.set('message', "Hey");

                expect(view.render).not.toHaveBeenCalled();
            });
        });
    });
});
