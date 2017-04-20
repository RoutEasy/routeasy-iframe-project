(function() {
    'use strict';

    angular.module('RouteasyIframe', ['ngResource', 'ngCookies', 'jsonFormatter', 'angular-progress-arc'])
    .config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    });
})();