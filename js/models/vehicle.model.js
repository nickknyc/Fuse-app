define(["backbone", "jquery", "underscore"], function(Backbone, $, _) {

    return Backbone.Model.extend({
        defaults: {
            "default": 1,
            "vin": "1FTFW1EV6AKA75407",
            "nickname" : "Truck",
            "year" : "2010",
            "make" : "Ford",
            "model" : "F-150 Supercrew",
            "icon" : "https://s3.amazonaws.com/k-mycloud/a169x672/7BD0B300-7DDF-11E2-AB3A-B9D7E71C24E1.img?q=97013",
            "notes" : "",
            "mileage": 159774,
            "lastWaypoint": {
               "timestamp": "20140116T152440+0000",
            "latitude": 28.088505,
            "longitude": -82.578467
            },
            "timestamp": "20140116T151952+0000",
            "running": false,
            "fulerate": 1.2,
            "fuellevel" : 20,
            "coolantTemperature": 163,
            "batteryVoltage": 13.2,
            "odometer": 65345,
            "header": 272,
            "speed": 72
        }
    });
});