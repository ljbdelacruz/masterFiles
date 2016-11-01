'use strict';

angular.module('modules.websiteChooser')
    .controller('WebsitesCtrl', ['$scope','$location',
        function($scope, $location) {
            $scope.websites=[{name:'Website 1', path:'/Template1', imgSrc:'images/w2.png'}, {name:'Website 2', path:'/Login', imgSrc:'images/w1.jpg'}];
            $scope.gotoWebsite=function(spath){
                $location.path(spath);
            }
        }
    ]);