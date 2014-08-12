define([ "fuse", "jquery", "underscore", "models/aggregate.model", "views/fuel.aggregate.item.view", "text!templates/fuelaggregatetmpl.html" ], function( Fuse, $, _, AggregateModel, FuelAggregateItemView, fuelAggregateTmpl ) {
    return Fuse.View.extend({
        id: "fuel-aggregate",
        tagName: "div",
        role: "page",
        header: "Fuel",
        transition: "slide",
        template: _.template( fuelAggregateTmpl ),

        events: {
            "tap .fuel-aggregate-item": "showFuelForVehicle"
        },

        initialize: function() {
            Fuse.View.prototype.initialize.apply( this, arguments );
            this.aggregates = [];
        },

        render: function() {
            this.aggregates.length = 0;
            this.collection.each(function ( summary ) {
                this.renderAggregateItem( summary );
            }, this );

            // Build our content.

            // We have to calculate fleet totals on our own.
            this.total = this.collection.toJSON().reduce(function(memo, current) {
                return new AggregateModel({
                    cost: memo.get('cost') + current.get('cost'),
                    distance: memo.get('distance') + current.get('distance'),
                    fillups: memo.get('fillups') + current.get('fillups'),
                    volume: memo.get('volume') + current.get('volume')
                });
            });

            Fuse.log(this.total);
            debugger;

            this.content = this.template({ total: this.total, aggs: this.aggregates });
            Fuse.View.prototype.render.call( this );
        },

        // This isnt going to work now.
        renderAggregateItem: function( summary ) {
            var s = new FuelAggregateItemView({
                model: summary
            });

            this.aggregates.push( s.render().el );
        },

        showFuelForVehicle: function( e ) {
            var vid = $( e.target ).closest( ".fuel-aggregate-item" ).data( "vid" );
            Fuse.show( "fuel", { id: vid } );
            e.handled = true;
        }
    });
});
