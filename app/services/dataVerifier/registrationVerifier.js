
angular.module('otherApp')
.factory('registrationVerifier', ['$http', function ($http) {
    return function (data, callbackResponse) {
        var issues="";
        if(data.password.length < 10){
        	issues+=" Password Must Be Strong";
        }

        if(issues==""){
        	callbackResponse();
        	return true;
        }else{
        	alert(issues);
        }
        return false;
    }
}]);