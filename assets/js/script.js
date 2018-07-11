angular.module('alert', [])
.controller('alertCtrl', function($scope) {
  $scope.check = function() {
    alert('une boite');
};
});
