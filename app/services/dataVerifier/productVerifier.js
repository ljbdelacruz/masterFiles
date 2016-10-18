
angular.module('otherApp')
.factory('productVerifier', ['$http', function ($http) {
    return function (data, callbackResponse) {
        var issues="";
        //put category of issues in here
        if(issues==""){
        	callbackResponse();
        	return true;
        }else{
        	alert(issues);
        }
        return false;
    }
}]);


