(function () {
  angular.module('LunchCheck', [])
  .controller("LunchCheckController", LunchCheckController);
  //LunchCheckController.inject[$scope];
  function LunchCheckController($scope) {
    $scope.lst = "";
    $scope.verifyLst = function () {
      var lst = $scope.lst.split(",");
      if($scope.lst == null || $scope.lst.length == 0 || lst == 0){
        $scope.result = "Please enter data first";
        $scope.colorClass = "red";
        $scope.colorBorder = "redBorder";
      }
      else if (lst.length <= 3) {
        $scope.result = "Enjoy!"
        $scope.colorClass = "green";
        $scope.colorBorder = "greenBorder";
      }else {
        $scope.result = "Too much!"
        $scope.colorClass = "green";
        $scope.colorBorder = "greenBorder";
      }
    }
  }
})();
