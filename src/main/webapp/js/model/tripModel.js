define(     [ 'backbone'],
    function(  Backbone ) {
        var TripModel = undefined;
        TripModel = Backbone.Model.extend({
            getResort: function() {
                return this.get('resort');
            },

            setResort: function(resort) {
                return this.set('resort', resort);
            },

            getAccommodation: function() {
                return this.get('accommodation');
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
