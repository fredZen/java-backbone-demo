define (    ['model/accommodationCollection', 'util/resource'],
    function(       AccommodationCollection ,       Resource ) {
    describe('AccommodationCollection', function(){
        describe('availableForResort', function(){
            beforeEach(function() {
                spyOn(Backbone, 'ajax');
                spyOn(Resource, 'url').andCallFake(function(url) {
                    return url;
                });
            });
            it('sets the correct url', function() {
                var collection = AccommodationCollection.availableForResort("BAY"), ajaxParameters;

                collection.fetch();

                ajaxParameters = Backbone.ajax.mostRecentCall.args[0];
                expect(ajaxParameters.url).toEqual("accommodation/forResort/BAY");
            });
        });
    });
});
