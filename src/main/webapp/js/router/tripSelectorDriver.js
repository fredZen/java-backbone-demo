define(      ['model/resortCollection', 'model/tripModel', 'model/accommodationCollection', 'view/tripSelectorView', 'jquery'],
    function (       ResortCollection ,        TripModel ,        AccommodationCollection ,       TripSelectorView , $       ) {
        var
            start = function(onResortsReady) {
                var
                    resorts = ResortCollection.available(),
                    trip = TripModel.empty(),
                    accommodations = new AccommodationCollection(),
                    view = TripSelectorView.show(trip, resorts, accommodations),
                    options;

                $("#main").append(view.$el);

                if(onResortsReady) {
                    options = {
                        success : function() {
                            onResortsReady(resorts, trip);
                        }
                    }
                }

                resorts.fetch(options);
            };

        return {
            startEmpty: start,

                startForResort: function(resortCode) {
                start(function(resorts, trip) {
                    var resort = resorts.get(resortCode);
                    resort.setActive();
                    trip.setResort(resort);
                });
            }
        };
    });
