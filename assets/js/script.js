var box = angular.module('alert', [])
box.controller('alertCtrl', ['$scope', '$window' function($scope, $window) {
  £scope.message = 'une boite';
  $scope.check = function(messageAlert) {
    $window.alert(messageAlert);
};
}]);
