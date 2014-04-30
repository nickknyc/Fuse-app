define([ "backbone", "fuse", "jquery", "underscore", "views/trip.view", "views/findcar.view", "views/trip.map.view", "text!templates/tripstmpl.html" ], function( Backbone, Fuse, $, _, TripView, FindCarView, TripMapView, tripsTmpl ) {
    return Fuse.View.extend({
        id: "trips",
        tagName: "div",
        role: "page",
        transition: "slide",
        template: _.template( tripsTmpl ),

        events: {
            "tap .fuse-trip-map-trigger": "showMapForTrip",
            "tap .collapsible-day": "toggleCollapse"
        },

        initialize: function() {
            Fuse.View.prototype.initialize.apply( this, arguments );
            this.header = this.model.get( "nickname" ) + " " + "Trips";
            this.tripViewData = {};
            this.lastDate = '';
        },

        render: function() {
            this.collection.each(function( trip ) {
                this.addTrip( trip );
            }, this );

            console.log( this.tripViewData );

            this.content = this.template({ vehicle: this.model.toJSON(), tripViewData: this.tripViewData });
            Fuse.View.prototype.render.call( this );
        },

        renderTrip: function( trip ) {
            var view = new TripView({
                model: trip
            });

            this.tripViews.push( view.render().el );
        },

        addTrip: function( trip ) {
            var date = trip.get( "endTime" ).substring( 0, 9 );
            var view = new TripView({
                model: trip
            });
             
            if (date !== this.lastDate) {
                this.tripViewData[ date ] = this.tripViewData[ date ] || {};
                this.lastDate = date;
            }
            this.tripViewData[ date ][ "elements" ] = this.tripViewData[ date ][ "elements" ] || [];
            this.tripViewData[ date ][ "aggregates" ] = this.tripViewData[ date ][ "aggregates" ] || {};
            this.tripViewData[ date ][ "elements" ].push( view.render().el );
  
        },

        /**
         * Utilize a Trip Map view to display the trip.
         * Pass the view a typical map configuration object,
         * specifying the needed data in order to render a route
         * between the start and end waypoints of our trip.
         */
        showMapForTrip: function ( e ) {
            // tid = trip id.
            var tid = $( e.target ).closest( ".trip" ).data( "tid" ),
                routeView = new TripMapView({
                    model: this.collection.get( tid )
                });

            routeView.render();

            e.handled = true;
        },

        toggleCollapse: function ( e ) {
            $( this ).next('div').collapsible( 'collapse' );
        }
    });
});
