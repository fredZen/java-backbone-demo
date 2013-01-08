define(     [ 'backbone'],
    function(  Backbone ) {
        var AccommodationModel = Backbone.Model.extend({
            setActive: function() {
                this.set('active', true);
            },

            setInactive: function() {
                this.set('active', false);
            },

            isActive: function() {
                return this.get('active');
            },

            getType: function() {
                return this.get('typeCode');
            }
         });
        return AccommodationModel;
    });
