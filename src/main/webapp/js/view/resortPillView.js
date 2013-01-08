define(     [ 'backbone', 'render!resortPill'],
    function(  Backbone ,  template      ) {
        var ResortPillView = Backbone.View.extend({
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
            show: function(resortModel) {
                var result = new ResortPillView({model: resortModel});
                result.render();
                return result;
            }
        });

        return ResortPillView;
    });
