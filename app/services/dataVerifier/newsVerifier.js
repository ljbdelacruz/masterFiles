
angular.module('otherApp')
.factory('newsVerifier', ['$http', function ($http) {
    return function (data, callbackResponse) {
    	var issues="";
        if(data.title != ""){
            issues+=" Title Field Required";
        }
        if(data.content == ""){
        	issues+=" Content Field Required";
        }
        if(issues == ""){
            callbackResponse();
            return true;
        }else{
        	alert(issues);
        }
        return false;

    }
}]);