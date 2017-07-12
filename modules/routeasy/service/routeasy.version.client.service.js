(function() {
'use strict';

    angular.module('RouteasyIframe').factory('Versions', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig', 'RouteasyAPIToken'];

    function RouteasyAPIDelivery($resource, appConfig, RouteasyAPIToken) {
        
        return $resource(appConfig.url() + 'versions/:versionId', 
        { 
            versionId: '@_id',            
        }, 
        {
            getVersion: {
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