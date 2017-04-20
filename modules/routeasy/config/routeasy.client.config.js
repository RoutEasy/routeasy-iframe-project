(function() {
'use strict';
    angular
        .module('RouteasyIframe')
        .constant('appConfig', {
            url: function() { return 'http://iframe.routeasy.com.br/'; },
            urlIframe: function() { return '#!/routings/create/1?token={{TOKEN}}'; }            
        });
})();