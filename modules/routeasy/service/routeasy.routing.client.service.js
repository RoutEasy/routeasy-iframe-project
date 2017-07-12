(function() {
'use strict';

    angular.module('RouteasyIframe').factory('Routings', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig', 'RouteasyAPIToken'];

    function RouteasyAPIDelivery($resource, appConfig, RouteasyAPIToken) {
        
        return $resource('', { 

            'versionId': '@_id',
            'routingId': '@_id'
        },
        {   
            getByGroup: {
                method: 'POST',
                url: appConfig.url() + 'routings/group',
                params: {
                    token: '@token',
                     api_token: function() {
                        return RouteasyAPIToken.api_token;
                    }
                }
            },
            getStarredVersion: {
                method: 'GET',
                url: appConfig.url() + 'routings/:routingId/versions/starred',
                params: {
                    api_token: function() {
                        return RouteasyAPIToken.api_token;
                    }
                }                     
            },
            getVersion: {
                method: 'GET',
                url: appConfig.url() + '/versions/:versionId',
                params: {
                    api_token: function() {
                        return RouteasyAPIToken.api_token;
                    }
                }                     
            }
        });
    }
})();