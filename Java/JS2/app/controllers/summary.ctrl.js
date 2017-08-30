/*-- Summary --*/

(function() {
	'use strict';

	go();

	/////////////////////
	
	function go() {
		document.getElementById('summary').style.backgroundImage = 'url('+data.summary.background+')';
		document.getElementById('profile').src = data.summary.photo;
		document.getElementById('name').innerHTML = data.summary.name;
		document.getElementById('title').innerHTML = data.summary.occupation;
		document.getElementById('location').innerHTML = data.summary.location;

		var phoneText = document.createTextNode(data.summary.phone);
		document.getElementById('phone').appendChild(phoneText);

		var emailText = document.createTextNode(data.summary.email);
		document.getElementById('email').appendChild(emailText);
		
	}
})();
/*-- /Summary --*/