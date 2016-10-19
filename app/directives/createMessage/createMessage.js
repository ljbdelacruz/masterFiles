'use strict';

/* Create module for navbar directive */
angular.module('directives.createMessage', [])
.directive('createMessage',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */
    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.message={receiver_id:1, subject:'Product', messages:{content:''}}; //receiver_id=admin sender_id=the user login
        scope.subjNum=0;
        //button listeners
        scope.GetInput=function(option){
            switch(option){
                case 1:
                    //this is for send button
                    this.SendMessage();
                    break;
                case 2:
                    this.Back();
                    //this is for back button
                    break;
            }
        };
        //logic
        scope.SendMessage=function(){
            //saves message to database
            alert("Send");
            alert(scope.message.subject);
        };
        scope.Back=function(){
            //disable adding new message
            alert("Back");
        };

    }
    return {
        restrict: 'E',
        replace: true,
        //change path if will be used on other projects
        templateUrl: 'app/directives/createMessage/createMessage.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);