(function() {
'use strict';

    angular.module('RouteasyIframe').factory('RouteasySample', RouteasyAPI);

    RouteasyAPI.inject = ['$resource', 'RouteasyAPIToken'];

    function RouteasyAPI($resource, RouteasyAPIToken) {
        
        return $resource('', {},
        {
            listDeliveries: {
                method: 'GET',
                url: '/samples/list-deliveries.json',
                isArray: true,
                params: {
                     api_token: function() {
                        return RouteasyAPIToken.api_token;
                    }
                }           
            }
        });
    }
})();