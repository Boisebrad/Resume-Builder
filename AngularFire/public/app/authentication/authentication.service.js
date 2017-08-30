(function() {
  'use strict';

  angular
    .module('app')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$firebaseAuth', '$firebaseObject'];

  function AuthService($firebaseAuth, $firebaseObject) {
    return {
      createUser: createUser,
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout,
      register: register
    };

    ///////////////////////

    function createUser(id){
      let ref - firebase.database().ref().child(id);
      return $firebaseObject(ref);
    }

    function isLoggedIn() {
      return $firebaseAuth().$getAuth();
    }

    function login(email, password) {
      return $firebaseAuth().$signInWithEmailAndPassword(email, password);
    }

    function logout() {
      return $firebaseAuth().$signOut();
    }

    function register(email, password) {
      return $firebaseAuth().$createUserWithEmailAndPassword(email, password);
    }
  }
})();