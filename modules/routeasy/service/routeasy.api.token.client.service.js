(function() {
'use strict';

    angular.module('RouteasyIframe').factory('RouteasyAPIToken', RouteasyAPIToken);

    function RouteasyAPIToken() {
        return {
            api_token: ''
        }
    }
})();