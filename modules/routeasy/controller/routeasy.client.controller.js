(function() {
'use strict';

    angular.module('RouteasyIframe').controller('RouteasyController', RouteasyController);
    RouteasyController.inject = ['$scope', '$sce', 'RouteasyAPIAuth', 'RouteasyAPIDelivery', 'Routings', 'RouteasySample', 'DeliveriesUtils', 'appConfig', 'StarredVersion', 'Versions'];

    function RouteasyController($scope, $sce, RouteasyAPIAuth, RouteasyAPIDelivery, Routings, RouteasySample, DeliveriesUtils, appConfig, StarredVersion, Versions) {


        $scope.deliveries = RouteasySample.listDeliveries();
        //$scope.iframeURL = appConfig.url() + appConfig.urlIframe();
        
        $scope.loginStatus = {
            error: false,
            success: false,
            errorMessage: ''
        };
        $scope.size = 200;
        $scope.progress = 0.75;
        $scope.strokeWidth = 5;
        $scope.stroke = '#2ecc71';
        $scope.counterClockwise = '';

        $scope.authentication = function() {
            RouteasyAPIAuth.login($scope.user, function(response) {                
                $scope.loginStatus.success = true;
                $scope.loginStatus.error = false;                
            }, function(err) {
               $scope.loginStatus.error = true;
               $scope.loginStatus.success = false;
               $scope.loginStatus.errorMessage = err.data.msg.message;
            });
        };

        $scope.deliveryStatus = {
            error: false,
            success: false,
            errorMessage: ''
        };

        $scope.sendDeliveries = function() {
            RouteasyAPIDelivery.create($scope.deliveries, function(response) {
                $scope.deliveryStatus.success = true;
                $scope.deliveryStatus.error = false;
                $scope.token = response.token;
                $scope.iframeURL = appConfig.url() + appConfig.urlIframe();
                $scope.iframeURL = $scope.iframeURL.replace('{{TOKEN}}', response.token);
                $scope.iframeURL = $sce.trustAsResourceUrl($scope.iframeURL);
            }, function(err) {
                $scope.deliveryStatus.error = true;
                $scope.deliveryStatus.success = false;
                $scope.deliveryStatus.errorMessage = err.data.message;
            })
        }; 


        $scope.stringAddress = function(address) {
            return DeliveriesUtils.addressToString(address);
        };

        $scope.formatWindowDaily = function(window_daily) {
            return DeliveriesUtils.formatWindowDaily(window_daily);
        };

        $scope.getRoutingByGroup = function() {
            var group = { token: $scope.token };
            Routings.getByGroup(group, function(response){                
                $scope.data = { 'routing': JSON.parse(angular.toJson(response)) };    
            }, function(err) {
                console.log('failed');
            });
        };

        $scope.getStarredVersion = function() {
            var routing = new StarredVersion($scope.data.routing);
            routing.$getStarredVersion(function(response) {
                 $scope.data.version = JSON.parse(angular.toJson(response));
            }, function(err) {
                console.log('failed');
            })
        };

        $scope.getVersion = function() {
            var version = new Versions($scope.data.version);
            version.$getVersion(function (response) {
                $scope.data.version = JSON.parse(angular.toJson(response));
            }, function(err) {
                console.log('failed');
            })
        }
    }
})();