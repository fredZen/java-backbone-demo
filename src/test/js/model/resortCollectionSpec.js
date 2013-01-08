define (    ['model/resortCollection'],
    function(       ResortCollection ) {
    describe('ResortCollection', function(){
        describe('available', function(){
            beforeEach(function() {
                spyOn(Backbone, 'ajax');
            });
            it('sets the correct url', function() {
                var
                    collection = ResortCollection.available(),
                    ajaxParameters;

                collection.fetch();

                ajaxParameters = Backbone.ajax.mostRecentCall.args[0];
                expect(ajaxParameters.url).toEqual("resource/resort");
            });
        });
    });
});
