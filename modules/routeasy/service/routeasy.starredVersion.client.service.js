(function() {
'use strict';

    angular.module('RouteasyIframe').factory('StarredVersion', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig', 'RouteasyAPIToken'];

    function RouteasyAPIDelivery($resource, appConfig, RouteasyAPIToken) {
        
        return $resource(appConfig.url() + 'routings/:routingId/versions/starred', 
        { 
            routingId: '@_id',            
        }, 
        {
            getStarredVersion: {
                method: 'GET',
                params: {
                     api_token: function() {
                        return RouteasyAPIToken.api_token;
                    }
                }    
            }
        });
    }
})();