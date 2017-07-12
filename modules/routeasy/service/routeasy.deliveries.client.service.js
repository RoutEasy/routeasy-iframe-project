(function() {
'use strict';

    angular.module('RouteasyIframe').factory('RouteasyAPIDelivery', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig', 'RouteasyAPIToken'];

    function RouteasyAPIDelivery($resource, appConfig, RouteasyAPIToken) {
        
        return $resource('', {},
        {
            create: {
                method: 'POST',  
                url: appConfig.url() + 'deliveries/group/create',
                params: {
                    api_token: function() {
                        return RouteasyAPIToken.api_token;
                    }
                }     
            },
            list: {
                method: 'POST',
                url: appConfig.url() + 'deliveries/group/list',
                params: {
                    api_token: function() {
                        return RouteasyAPIToken.api_token;
                    }
                } 
            }
        });
    }
})();