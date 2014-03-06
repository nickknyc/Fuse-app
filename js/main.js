require(["fuse", "cloudos", "jquery", "routers/app.router", "routers/vehicles.router", "controllers/app.controller", "controllers/vehicles.controller", "jquerymobile", "tooltipster"], function(Fuse, CloudOS, $, AppRouter, VehiclesRouter, AppController, VehiclesController) {

	// setup dummy data. Will eventually come from API obviously.
	Fuse.FIXTURES = {
		"vehicles": [{
			"id": "VSPQ",
			"default": 1,
			"vin": "1FTFW1EV6AKA75407",
			"nickname" : "F-150",
			"year" : "2010",
			"make" : "Ford",
			"model" : "F-150 Supercrew",
			"icon" : "https://s3.amazonaws.com/k-mycloud/a169x672/7BD0B300-7DDF-11E2-AB3A-B9D7E71C24E1.img?q=97013",
			"notes" : "",
			"mileage": 159774,
			"lastWaypoint": {
				"timestamp": "20140116T152440+0000",
				"latitude": 40.23107,
				"longitude": -111.65885
			},
			"timestamp": "20140116T151952+0000",
			"running": false,
			"fuelRate": 1.2,
			"fuelLevel" : 20,
			"coolantTemperature": 163,
			"batteryVoltage": 13.2,
			"odometer": 65345,
			"header": 272,
			"speed": 72
		},
		{
			"id": "V4GM",
			"vin": "4TAWNSFDDSKLFJ",
			"nickname" : "Tacoma",
			"year" : "2000",
			"make" : "Toyota",
			"model" : "Tacoma",
			"icon" : "https://s3.amazonaws.com/k-mycloud/a169x672/B87948E0-2306-11E3-953D-B39BDC00B96D.img?q=49420",
			"notes" : "I love this truck!",
			"mileage": 273000,
			"lastWaypoint": {
				"timestamp": "20140116T152440+0000",
				"latitude": 40.42970,
				"longitude": -111.89830
			},
			"timestamp": "20140116T151952+0000",
			"running": true,
			"fuelRate": 1.2,
			"fuelLevel" : 20,
			"coolantTemperature": 163,
			"batteryVoltage": 13.2,
			"odometer": 65345,
			"header": 272,
			"speed": 72
		},
		{
			"id": "VN0E",
			"vin": "Y257JX9AXQDXI529",
			"nickname": "Fiesta",
			"year": "1998",
			"make": "Ford",
			"model": "Fiesta",
			"icon": "style/images/ford_fiesta.jpg",
			"notes": "Labore consectetur et proident veniam mollit. In minim reprehenderit proident et. Elit fugiat cillum sit cillum quis. Elit ad ullamco velit laborum amet exercitation ea. Nisi ea nostrud ullamco ipsum magna consequat id qui",
			"mileage": 84519,
			"lastWaypoint": {
				"timestamp": "19925606T185601T+07:00",
				"latitude": 40.74937,
				"longitude": -111.82633
			},
			"timestamp": "19910831T060849T+07:00",
			"running": false,
			"fuelRate": 2.63,
			"fuelLevel": 22,
			"coolantTemperature": 95,
			"batteryVoltage": 73.4,
			"odometer": 19725,
			"heading": 270,
			"speed": 24
		}],

		"trips": {}
	};

	Fuse.menu = [{
		action: "settings",
		text: "Settings"
	},
	{
		action: "vehicles",
		text: "Vehicles"
	},
	{
		action: "logout",
		text: "Logout"
	}];

	// intialize the routers.
	Fuse.routers = {};
	Fuse.routers.AppRouter = new AppRouter();
	Fuse.routers.VehiclesRouter = new VehiclesRouter();
	// initialize the controllers.
	Fuse.routers.AppRouter.controller = new AppController();
	Fuse.routers.VehiclesRouter.controller = new VehiclesController();
	// this is used for prefiltering Fuse.show() requests. Mainly for early-stage development and probably
	// a good idea to remove later.
	Fuse.routes = Object.keys(_.extend(Fuse.routers.AppRouter.routes, Fuse.routers.VehiclesRouter.routes));
	// remove this for production.
	Fuse.logging = true;
	
	// start the app.
	Fuse.init();
});
