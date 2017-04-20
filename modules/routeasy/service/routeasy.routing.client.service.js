(function() {
'use strict';

    angular.module('RouteasyIframe').factory('Routings', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig'];

    function RouteasyAPIDelivery($resource, appConfig) {
        
        return $resource('', { 

            'versionId': '@_id',
            'routingId': '@_id'
        },
        {   
            getByGroup: {
                method: 'POST',
                url: appConfig.url() + 'routings/group',
                params: {
                    token: '@token'
                }
            },
            getStarredVersion: {
                method: 'GET',
                url: appConfig.url() + 'routings/:routingId/versions/starred'                
            },
            getVersion: {
                method: 'GET',
                url: appConfig.url() + '/versions/:versionId'                
            }
        });
    }
})();