(function() {
  'use strict';

  var config = {
    apiKey: "AIzaSyBFHmnOtVzfkV_l52qSlKOJDDP4NFzXajo",
    authDomain: "resume-builder-ecdf3.firebaseapp.com",
    databaseURL: "https://resume-builder-ecdf3.firebaseio.com",
    projectId: "resume-builder-ecdf3",
    storageBucket: "resume-builder-ecdf3.appspot.com",
    messagingSenderId: "1049987968075"
  };
  firebase.initializeApp(config);


  angular.module('app', ['ui.router', 'firebase']);
  
})();