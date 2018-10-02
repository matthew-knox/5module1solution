(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
   $scope.checkLunch = function () {
     // doing empty string check
     if(!$scope.lunchMeals || 0 === $scope.lunchMeals.length ){
       $scope.customStyle = {
        "color" : "red",
      }
       $scope.message = "Please enter data first";
       return;
     }

     setLunchItemSize($scope);

     if($scope.lunchItemSize> 3){
         $scope.customStyle = {
          "color" : "red",
        }
        $scope.message = "Too much!";
     }
     else{
         $scope.customStyle = {
          "color" : "green",
        }
        $scope.message = "Enjoy!";
     }

   };

   function setLunchItemSize($scope) {
     var array = $scope.lunchMeals.split(',');
     var lunchItemSize= 0;
     for(var i=0; i<array.length; i++){
       if(array[i] &&  0 < array[i].length)
        lunchItemSize++;
     }
     $scope.lunchItemSize = lunchItemSize;
   }
}

})();
