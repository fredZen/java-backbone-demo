define(     [ 'backbone', 'render!tripSummary'],
    function(  Backbone ,  template           ) {
        var
            toJSON = function(obj) {
                return obj ? obj.toJSON() : {};
            },
            TripSummaryView = Backbone.View.extend({
            // Instance
            initialize: function() {
                this.model.on('change', this.render, this);
            },

            render: function() {
                this.$el.html(template({
                    resort: toJSON(this.model.getResort()),
                    accommodation: toJSON(this.model.getAccommodation())
                }));
            }
        }, {
            // Class
            show: function(tripModel) {
                var result = new TripSummaryView({model: tripModel});
                result.render();
                return result;
            }
        });

        return TripSummaryView;
    });
