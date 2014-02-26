define(["fuse", "jquery", "underscore", "text!templates/vehicleitemtmpl.html"], function(Fuse, $, _, vehicleItemTmpl) {
	// represets an item in the vehicle list.
    return Fuse.View.extend({
        tagName: "li",
        className: "vehicle",
        template: _.template(vehicleItemTmpl),

        // do nothing for now
        initialize: function() {
            Fuse.log(this.model);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});
