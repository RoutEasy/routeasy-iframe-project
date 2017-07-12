(function() {
'use strict';

    angular.module('RouteasyIframe').factory('RouteasyAPIAuth', RouteasyAPI);

    RouteasyAPI.inject = ['$resource', 'appConfig'];

    function RouteasyAPI($resource, appConfig) {
        
        return $resource(appConfig.url() + 'auth/signin', 
        {
            userId: '@_id'
        },
        {
            login: {
                method: 'POST'
            },
            createToken: {
                method: 'POST',
                url: appConfig.url() + 'users/security/createToken/:userId'
            }
        });
    }
})();