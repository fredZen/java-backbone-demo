define(     [ 'backbone'],
    function(  Backbone ) {
        var ResortModel = Backbone.Model.extend({
                setActive: function() {
                    this.set('active', true);
                },

                setInactive: function() {
                    this.set('active', false);
                },

                isActive: function() {
                    return this.get('active');
                }
            });

        return ResortModel;
    });
