'use strict';

angular.module('modules.dashboard')

.controller('DashboardCtrl',
            ['$scope',
             function($scope) {
            $scope.message="Hello Maria";
            $scope.ClickMe=function(){
            	$scope.message="Hello!";
            };
            $scope.username="";
            

}]);