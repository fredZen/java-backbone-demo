define(     [ 'backbone'],
    function(  Backbone ) {
        var
            TripModel =  Backbone.Model.extend({
                getResort: function() {
                    return this.get('resort');
                },

                setResort: function(resort) {
                    this.set('resort', resort);
                },

                getAccommodation: function() {
                    return this.get('accommodation');
                },

                setAccommodation: function(accommodation) {
                    this.set('accommodation', accommodation);
                }
            }, {
                empty: function() {
                    return new TripModel();
                },

                forResortAndAccommodation: function (resort, accommodation) {
                    return new TripModel({resort: resort, accommodation: accommodation});
                }
            });

        return TripModel;
    });
