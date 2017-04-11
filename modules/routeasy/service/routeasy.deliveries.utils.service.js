(function() {
'use strict';

    angular
        .module('RouteasyIframe').service('DeliveriesUtils', DeliveriesUtils);

    DeliveriesUtils.inject = [];
    function DeliveriesUtils() {
        var service = {};

        service.addressToString = function(address) {
            return (
                (address.route ? address.route + ', ' : '' )+
                (address.street_number ? address.street_number + ', ': '')+
                (address.city ? address.city + ', ' : '' )+
                (address.state ? address.state + ', ' : '' )+
                (address.country ? address.country + ', ' : '')+
                (address.postal_code ? address.postal_code : '')
            );
        };

        service.formatWindowDaily = function(window_daily) {
            if (!window_daily || !window_daily.start_time || !window_daily.end_time)
            return '';
            var a = new Date(window_daily.start_time),
            b = new Date (window_daily.end_time), formatDate = '';
            return (a.getUTCHours() + ':' + (a.getUTCMinutes() === 0 ? '00' : a.getUTCMinutes()) + ' / ' + b.getUTCHours() + ':' + (b.getUTCMinutes() === 0 ? '00' : b.getUTCMinutes()));
        }
        return service;
    }
})();