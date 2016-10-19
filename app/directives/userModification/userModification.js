'use strict';

/* Create module for navbar directive */
angular.module('directives.userModification', [])
.directive('userModification',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.users=[{user:{username:'ljbdelacruz', password:'johnny05'}, isSelected:false}];
        scope.enableEdit=false;


        //view part
        scope.Button_OnClicked=function(option, user){
            switch(option){
                case 1:
                    //edit on Clicked
                    scope.enableEdit=true;
                    alert(user.username);
                    break;
                case 2:
                    //delete on clicked
                    alert("Delete Users");
                    //scope.DeleteUsers();
                    break;
            }
        };
        scope.DeleteUsers=function(){
            var lUser=[];
            for(var i=0; i<scope.users.length; i++){
                if(scope.users[i].isSelected){
                    lUser.push(scope.users[i].user);
                }
            }
            //delete the users here
        };
        //edit part
        scope.MakeChanges=function(option){
            scope.enableEdit=false;
            switch(option){
                case 1:
                    //save changes
                    alert("Save Changes");
                    break;
                case 2:
                    //discard changes
                    alert("Discard Changes");
                    break;
            }
        };
    }
    return {
        restrict: 'E',
        replace: true,
        //change path if will be used on other projects
        templateUrl: 'app/directives/userModification/userModification.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);