var app = angular.module('ngMessagesExample', ['ngMessages']);
function check($window, $scope) {
  $scope.hello = function() {
    $window.alert($scope.email)
  }
}
