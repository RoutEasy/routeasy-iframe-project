(function() {
    'use strict';

    angular.module('RouteasyIframe', ['ngResource', 'ngCookies'])
    .config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    });
})();