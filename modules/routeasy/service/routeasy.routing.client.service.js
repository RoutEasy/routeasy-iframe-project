(function() {
'use strict';

    angular.module('RouteasyIframe').factory('Routings', RouteasyAPIDelivery);

    RouteasyAPIDelivery.inject = ['$resource', 'appConfig'];

    function RouteasyAPIDelivery($resource, appConfig) {
        
        return $resource('',{ },
        {   
            getByGroup: {
                method: 'POST',
                url: appConfig.url() + 'routings/group',
                params: {
                    token: '@token'
                }
            }
        });
    }
})();