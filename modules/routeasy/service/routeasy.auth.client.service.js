(function() {
'use strict';

    angular.module('RouteasyIframe').factory('RouteasyAPIAuth', RouteasyAPI);

    RouteasyAPI.inject = ['$resource', 'appConfig'];

    function RouteasyAPI($resource, appConfig) {
        
        return $resource(appConfig.url() + 'auth/signin', {},
        {
            login: {
                method: 'POST'
            }
        });
    }
})();