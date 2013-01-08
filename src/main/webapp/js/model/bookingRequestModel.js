define(     [ 'backbone', 'util/resource'],
    function(  Backbone ,       Resource ) {
        var BookingRequestModel = Backbone.Model.extend({
            url: Resource.url("booking")
        }, {
            forResortAndAccommodationCode: function(resortCode, accommodationCode) {
                return new BookingRequestModel({
                    resortCode: resortCode,
                    accommodationCode: accommodationCode
                });
            }
        });
        return BookingRequestModel;
    });
