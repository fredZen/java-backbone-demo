define(     [ 'backbone', 'render!resortSelector', './resortPillView'],
    function(  Backbone ,  template            ,    ResortView ) {
        var ResortSelectorView = Backbone.View.extend({
            // Instance
            initialize: function() {
                this._listenToModel();
            },

            setModel: function(resortCollection) {
                if(this.model) {
                    this.model.off('reset');
                }
                this.model = resortCollection;
                this._listenToModel();
            },

            _listenToModel: function() {
                if(this.model) {
                    this.model.on('reset', this.render, this);
                }
            },

            render: function() {
                var that = this;
                this.$el.html(template());
                this.model.each(function(resort) {
                    var view = ResortView.show(resort);
                    that.$("#resorts").append(view.$el);
                });
            }
        }, {
            // Class
            show: function(resortCollection) {
                var result = new ResortSelectorView({model: resortCollection});
                result.render();
                return result;
            }
        });

        return ResortSelectorView;
    });
