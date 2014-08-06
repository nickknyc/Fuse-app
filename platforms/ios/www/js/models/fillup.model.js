define([ "fuse" ], function( Fuse ) {
    return Fuse.Model.extend({
        defaults: {
            "numGallons"    : 0,
            "priceGallon"   : 0.00,
            "cost"          : 0,
            "odometer"      : 000000,
            "timestamp"     : new Date().toISOString(),
            "gasStation"    : "Other"
        },

        sync: function(method, model, options) {
            switch(method) {
                case 'create':
                    Fuse.loading('show', 'adding fillup...');
                    API.recordFillup(
                        Fuse.currentFuelContext,
                        { 
                            volume: model.get('numGallons'), 
                            unitPrice: model.get('priceGallon'), 
                            odometer: model.get('odometer'),
                            location: model.get('gasStation'),
                            when: model.get('timestamp')
                        }, 
                        function(res) {
                            Fuse.loading('hide');
                            if (typeof res.skyCloudError === 'undefined') {
                                alert('Fillup succesfully added.');
                                if (typeof options.success === 'function') {
                                    options.success();
                                }
                            } else {
                                if (typeof options.error === 'function') {
                                    options.error();
                                }
                            }
                    });
                    break;
            }
        }
    });
});
