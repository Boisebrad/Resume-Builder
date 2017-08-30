(function(){
  'use strict';

  angular
  .module('app')
  .factory('APIService', APIService);

  APIService.$inject = {'$firebaseArray', '$firebaseObject'};

  function APIService($firebaseArray, $firebaseObject) {
    let ref = firebase.database().ref();
    let service = {
      getEducation,
      getExperience,
      getSkills,
      getSummary,
      getUser
      
    }

    function getEducation(uid) {
      return $firebaseArray(ref.child(uid).child('educaiton'));
    }

    
  }
 
  
})();