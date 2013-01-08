define (    ['model/tripModel'],
    function(       TripModel ) {
    describe('TripModel', function(){
        describe('forTripAndAccommodation', function(){
            it('sets the trip and the accommodation', function() {
                var
                    resort = {},
                    accommodation = {},
                    model;

                model = TripModel.forResortAndAccommodation(resort, accommodation);

                expect(model.getResort()).toBe(resort);
                expect(model.getAccommodation()).toBe(accommodation);
            });
        });
    });
});
