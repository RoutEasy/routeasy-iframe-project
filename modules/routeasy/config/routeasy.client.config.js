(function() {
'use strict';
    angular
        .module('RouteasyIframe')
        .constant('appConfig', {
            url: function() { return 'http://localhost:3000/'; },
            urlIframe: function() { return '#!/routings/create/1?token={{TOKEN}}'; }            
        });

    
})();