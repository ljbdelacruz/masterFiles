'use strict';

angular.module('modules.template1')
    .controller('template1Ctrl', ['$scope',
        function($scope) {
            $scope.images=[{image:'images/l1.jpg', width:'100', height:'100'}, {image:'images/lm1.jpg', width:'100', height:'100'}];   
        }
    ]);