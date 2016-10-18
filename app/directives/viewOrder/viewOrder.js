'use strict';

/* Create module for navbar directive */
angular.module('directives.viewOrder', [])
.directive('viewOrder',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */

    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.mode2=3;

        scope.orders=[{id:1, username:'ljbdelacruz', isProcessed:true, dateCreated:'December 5, 2016', bill:2000,
                       address:'Km 84 Marber', 
                       items:[{id:1, item:'Spinach', quantity:3, cost:2000},
                               {id:2, item:'Lagoon', quantity:4, cost:3000}]}, 
                      {id:2, username:'msmhondong', isProcessed:false, dateCreated:'December 20, 2016', bill:3000,
                       address:'Panorama', 
                       items:[{id:2, item:'Lagoon', quantity:4, cost:3000}] 
                     }];
        scope.items=[];
        scope.Orders_OnClicked=function(nItems){
            scope.items=nItems;
        };

        //properties for adding new order in database
        scope.selectedItem={id:-1, item:'Spinach'};
        //if it will be used to be one of the components then assign selectedItem to cItemSelected in order
        //to assume the value of the selected item to be added into the cart
        //the cCart contains the users current cart and if he/she adds new item into the cart
        //it automatically updates the carts array 
        scope.cart=[];
        scope.quantity=0;
        scope.AddNewOrder=function(){
          var newItem={item:selectedItem.item, quantity: scope.quantity};
          scope.cart.push(newItem);
        };


        //delete order mode
        //this method deletes the order of a user and all of the items in it
        scope.DeleteOrderOfUser=function(){
          //todo delete the order in orders and update the database
        };
        //this one deletes the item in a order
        scope.DeleteItemOrder=function(){
            //todo delete the specific item in cCart and update the database
        };

    }
    return {
        restrict: 'E',
        scope: {
            mode:'=',
            cItemSelected:'=',
            cCart:'=',
        },
        replace: true,
        //change path if will be used on other projects
        templateUrl: 'app/directives/viewOrder/viewOrder.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);