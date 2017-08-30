(function() {
  'use strict';

  angular
    .module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', '$state', 'AuthService'];

  function RegisterCtrl($scope, $state, AuthService) {

    $scope.register = register;

    function register() {
      AuthService.register($scope.email, $scope.password).then(data => {
        AuthService.login($scope.email, $scope.password).then(data => {
          let userObj = AuthService.createUser(data.uid);
          userObj.summary = { email: $scope.email };
          userObj.$save().then (data => {
          $state.go('resume', {id: data.key()});
        })
      }).catch(error => console.log(error));
    }
  }
  
})();