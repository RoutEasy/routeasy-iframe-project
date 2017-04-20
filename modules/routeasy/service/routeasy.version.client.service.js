(function() {
'use strict';

    angular.module('RouteasyIframe').factory('Versions', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig'];

    function RouteasyAPIDelivery($resource, appConfig) {
        
        return $resource(appConfig.url() + 'versions/:versionId', 
        { 
            versionId: '@_id',            
        }, 
        {
            getVersion: {
                method: 'GET'
            }
        });
    }
})();