(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "";
  $scope.itemCount = 0;
  $scope.message= "";

  $scope.displayMessage = function () {
    var comma = ',';
    var totalCount = splitString($scope.name,comma);
    if(totalCount>0 && totalCount<=3){
      $scope.message="Enjoy!";
      $scope.fontColor={
        "color" : "green"
      }
      $scope.borderColor={
        "borderColor" : "green"
      }
    }
    if(totalCount>3){
      $scope.message="Too Much!";
      $scope.fontColor={
        "color" : "green"
      }
      $scope.borderColor={
        "borderColor" : "green"
      }
    }
    if(($scope.name.trim())=="" || ($scope.name.trim())==" "){
      $scope.message="Please enter data first!";
      $scope.fontColor={
        "color" : "red"
      }
      $scope.borderColor={
        "borderColor" : "red"
      }
    }
  };

  function splitString(stringToSplit,separator) {
    var items = 0;
    var arrayOfStrings = stringToSplit.split(separator);
    for (var i = 0; i <  arrayOfStrings.length; i++) {
      var tempStr= arrayOfStrings[i].trim();
      if( tempStr==null ||  tempStr=="" ||  tempStr==" "){
        items = items + 0;
      }
      else{
        items = items + 1 ;
      }
    }
    return items;
  }

});
})();
