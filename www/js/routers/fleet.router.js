define([ "fuse", "jquery", "underscore" ], function( Fuse, $, _ ) {
    return Fuse.Router.extend({
        routes: {
            "fleet": "showFleet",
            "fleet/:id": "showVehicle",
            "findcar": "showFindCar",
            "findcar/:id": "showFindCar",
            "trips": "showTripAggregate",
            "trips/:id": "showTrips",
            "fuel": "showFuelAggregate",
            "fuel/:id": "showFuel"
        },

        showFleet: function() {
        	this.invokeControllerFunction( "showFleet", arguments );
        },

        showVehicle: function() {
            this.invokeControllerFunction( "showVehicle", arguments );
        },

        showFindCar: function() {
            this.invokeControllerFunction( "showFindCar", arguments );
        },

        showTripAggregate: function() {
            this.invokeControllerFunction( "showTripAggregate", arguments );
        },
        
        showTrips: function( id ) {
            this.invokeControllerFunction( "showTrips", arguments );
        },

        showFuelAggregate: function( id ) {
            this.invokeControllerFunction( "showFuelAggregate", arguments );
        },

        showFuel: function( id ) {
            this.invokeControllerFunction( "showFuel", arguments );
        }
    });
});