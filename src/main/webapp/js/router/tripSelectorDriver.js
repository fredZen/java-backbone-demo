define(      ['model/resortCollection', 'model/tripModel', 'model/accommodationCollection', 'view/tripSelectorView', 'jquery'],
    function (       ResortCollection ,        TripModel ,        AccommodationCollection ,       TripSelectorView , $       ) {
        return {
            startEmpty: function() {
                var
                    resorts = ResortCollection.available(),
                    trip = TripModel.empty(),
                    accommodations = new AccommodationCollection(),
                    view = TripSelectorView.show(trip, resorts, accommodations);

                $("#main").append(view.$el);

                resorts.fetch();
            }
        };
    });
