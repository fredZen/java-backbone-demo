define(     ['view/resortPillView', 'model/resortModel'],
    function(      ResortPillView ,        ResortModel ) {
    describe('ResortPillView', function(){
        describe('setModel', function(){
            var
                oldModel = new ResortModel({name: "Something"}),
                newModel = new ResortModel({name: "Whatever"});

            it('sets the new model as the source to render from', function() {
                var view = new ResortPillView({model: oldModel});

                view.setModel(newModel);
                view.render();

                expect(view.$el).toHaveText(/.*Whatever.*/);
            });

            it('starts listening to the new model', function() {
                var view = new ResortPillView({model: oldModel});
                spyOn(view, 'render');

                runs(function(){
                    view.setModel(newModel);
                    newModel.set('name', "Hey");
                });

                waitsFor(function(){
                    return view.render.callCount > 0;
                }, "render to be called", 250);
            });

            it('stops listening to the old model', function() {
                var view = new ResortPillView({model: oldModel});
                spyOn(view, 'render');

                view.setModel(newModel);
                oldModel.set('name', "Hey");

                expect(view.render).not.toHaveBeenCalled();
            });
        });
    });
});
