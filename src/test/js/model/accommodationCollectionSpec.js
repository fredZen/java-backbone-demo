define (    ['model/accommodationCollection'],
    function(       AccommodationCollection ) {
    describe('AccommodationCollection', function(){
        describe('availableForResort', function(){
            beforeEach(function() {
                spyOn(Backbone, 'ajax');
            });
            it('sets the correct url', function() {
                var
                    collection = AccommodationCollection.availableForResort("BAY"),
                    ajaxParameters;

                collection.fetch();

                ajaxParameters = Backbone.ajax.mostRecentCall.args[0];
                expect(ajaxParameters.url).toEqual("resource/accommodation/forResort/BAY");
            });
        });
    });
});
