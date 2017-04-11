(function() {
'use strict';

    angular.module('RouteasyIframe').factory('RouteasySample', RouteasyAPI);

    RouteasyAPI.inject = ['$resource'];

    function RouteasyAPI($resource) {
        
        return $resource('', {},
        {
            listDeliveries: {
                method: 'GET',
                url: '/samples/list-deliveries.json',
                isArray: true            
            }
        });
    }
})();