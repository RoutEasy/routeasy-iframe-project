(function() {
'use strict';

    angular.module('RouteasyIframe').factory('StarredVersion', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig'];

    function RouteasyAPIDelivery($resource, appConfig) {
        
        return $resource(appConfig.url() + 'routings/:routingId/versions/starred', 
        { 
            routingId: '@_id',            
        }, 
        {
            getStarredVersion: {
                method: 'GET'
            }
        });
    }
})();