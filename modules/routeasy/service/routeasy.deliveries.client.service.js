(function() {
'use strict';

    angular.module('RouteasyIframe').factory('RouteasyAPIDelivery', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig'];

    function RouteasyAPIDelivery($resource, appConfig) {
        
        return $resource('', {},
        {
            create: {
                method: 'POST',  
                url: appConfig.url() + 'deliveries/group/create'          
            },
            list: {
                method: 'POST',
                url: appConfig.url() + 'deliveries/group/list'
            }
        });
    }
})();