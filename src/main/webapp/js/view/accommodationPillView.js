define(     [ 'backbone', 'render!accommodationPill'],
    function(  Backbone ,  template      ) {
        var AccommodationPillView = Backbone.View.extend({
            // Instance
            tagName: "li",

            events: {
                "click a": "pillSelected"
            },

            pillSelected: function() {
                this.model.setActive();
                return false;
            },

            initialize: function() {
                this._listenToModel();
            },

            _listenToModel: function() {
                if(this.model) {
                    this.model.on('change', this.render, this);
                }
            },

            render: function() {
                this.$el.html(template(this.model.toJSON()));
                if(this.model.isActive()) {
                    this.$el.addClass("active");
                } else {
                    this.$el.removeClass("active");
                }
            }
        }, {
            // Class
            show: function(accommodationModel) {
                var result = new AccommodationPillView({model: accommodationModel});
                result.render();
                return result;
            }
        });

        return AccommodationPillView;
    });
