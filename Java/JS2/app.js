/*-- Summary --*/

var summary = document.getElementById("summary");
summary.setAttribute('style', 'background-image: url("'+resumeData.summary.background+'")');


var profile = document.getElementById('profile');
profile.setAttribute('src', resumeData.summary.profile);

var summaryName = document.getElementById('name');
var summaryNameText = document.createTextNode(resumeData.summary.name);
summaryName.appendChild(summaryNameText);

var summaryTitle = document.getElementById('title');
var summaryTitleText = document.createTextNode(resumeData.summary.title);
summaryTitle.appendChild(summaryTitleText);

var summaryLocation = document.getElementById('location');
var summaryLocationText = document.createTextNode(resumeData.summary.location);
summaryLocation.appendChild(summaryLocationText);

var summaryPhone = document.getElementById('phone');
var summaryPhoneText = document.createTextNode(resumeData.summary.phone);
summaryPhone.appendChild(summaryPhoneText);

var summaryEmail = document.getElementById('email');
var summaryEmailText = document.createTextNode(resumeData.summary.email);
summaryEmail.appendChild(summaryEmailText);
/*-- /Summary --*/


/*-- Skills --*/
var skillsList = document.getElementById('skills-list');

var skillOne = document.createElement('li');
var skillOneText = document.createTextNode(resumeData.skills[0]);
skillOne.appendChild(skillOneText);
skillsList.appendChild(skillOne);

var skillTwo = document.createElement('li');
var skillTwoText = document.createTextNode(resumeData.skills[1]);
skillTwo.appendChild(skillTwoText);
skillsList.appendChild(skillTwo);

var skillThree = document.createElement('li');
var skillThreeText = document.createTextNode(resumeData.skills[2]);
skillThree.appendChild(skillThreeText);
skillsList.appendChild(skillThree);

var brElemOne = document.createElement('br');
skillsList.appendChild(brElemOne);

var skillFour = document.createElement('li');
var skillFourText = document.createTextNode(resumeData.skills[3]);
skillFour.appendChild(skillFourText);
skillsList.appendChild(skillFour);

var skillFive = document.createElement('li');
var skillFiveText = document.createTextNode(resumeData.skills[4]);
skillFive.appendChild(skillFiveText);
skillsList.appendChild(skillFive);

var skillSix = document.createElement('li');
var skillSixText = document.createTextNode(resumeData.skills[5]);
skillSix.appendChild(skillSixText);
skillsList.appendChild(skillSix);

var brElemTwo = document.createElement('br');
skillsList.appendChild(brElemTwo);

var skillSeven = document.createElement('li');
var skillSevenText = document.createTextNode(resumeData.skills[6]);
skillSeven.appendChild(skillSevenText);
skillsList.appendChild(skillSeven);

var skillEight = document.createElement('li');
var skillEightText = document.createTextNode(resumeData.skills[7]);
skillEight.appendChild(skillEightText);
skillsList.appendChild(skillEight);

/*-- /Skills --*/

/*-- /Experience --*/
var experience = document.getElementById('experience');

var entryOne = document.createElement('div');
entryOne.className = "entry";

var entryOneTitle = '<h1>'+resumeData.experience[0].title+'</h1>';
var entryOneOrganization = '<h2>'+resumeData.experience[0].organization+'</h2>';
var entryOneYears = '<h1 class="text-right"><small>'+resumeData.experience[0].startYear+'- '+resumeData.experience[0].endYear+'</small></h1>';

var entryOneDescriptionOne = '<li>'+resumeData.experience[0].descriptions[0]+'</li>';
var entryOneDescriptionTwo = '<li>'+resumeData.experience[0].descriptions[1]+'</li>';
var entryOneDescriptions = '<ul>'+entryOneDescriptionOne+entryOneDescriptionTwo+'</ul>';

var entryOneHTML = '<div class="row">'+
        '<div class="col-md-9">'+entryOneTitle+entryOneOrganization+'</div>'+
        '<div class="col-md-3">'+entryOneYears+'</div>'+
      '</div>'+
      '<div class="row"><hr />'+entryOneDescriptions+'</div>';
entryOne.innerHTML = entryOneHTML;
experience.appendChild(entryOne);

var entryTwo = document.createElement('div');
entryTwo.className = "entry";

var entryTwoTitle = '<h1>'+resumeData.experience[1].title+'</h1>';
var entryTwoOrganization = '<h2>'+resumeData.experience[1].organization+'</h2>';
var entryTwoYears = '<h1 class="text-right"><small>'+resumeData.experience[1].startYear+'- '+resumeData.experience[0].endYear+'</small></h1>';

var entryTwoDescriptionOne = '<li>'+resumeData.experience[1].descriptions[0]+'</li>';
var entryTwoDescriptionTwo = '<li>'+resumeData.experience[1].descriptions[1]+'</li>';
var entryTwoDescriptions = '<ul>'+entryTwoDescriptionOne+entryTwoDescriptionTwo+'</ul>';

var entryTwoHTML = '<div class="row">'+
        '<div class="col-md-9">'+entryTwoTitle+entryTwoOrganization+'</div>'+
        '<div class="col-md-3">'+entryTwoYears+'</div>'+
      '</div>'+
      '<div class="row"><hr />'+entryTwoDescriptions+'</div>';
entryTwo.innerHTML = entryTwoHTML;
experience.appendChild(entryTwo);

var entryThree = document.createElement('div');
entryThree.className = "entry";

var entryThreeTitle = '<h1>'+resumeData.experience[2].title+'</h1>';
var entryThreeOrganization = '<h2>'+resumeData.experience[2].organization+'</h2>';
var entryThreeYears = '<h1 class="text-right"><small>'+resumeData.experience[2].startYear+'- '+resumeData.experience[0].endYear+'</small></h1>';

var entryThreeDescriptionOne = '<li>'+resumeData.experience[2].descriptions[0]+'</li>';
var entryThreeDescriptionTwo = '<li>'+resumeData.experience[2].descriptions[1]+'</li>';
var entryThreeDescriptions = '<ul>'+entryThreeDescriptionOne+entryThreeDescriptionTwo+'</ul>';

var entryThreeHTML = '<div class="row">'+
        '<div class="col-md-9">'+entryThreeTitle+entryThreeOrganization+'</div>'+
        '<div class="col-md-3">'+entryThreeYears+'</div>'+
      '</div>'+
      '<div class="row"><hr />'+entryThreeDescriptions+'</div>';
entryThree.innerHTML = entryThreeHTML;
experience.appendChild(entryThree);

/*-- /Experience --*/

/*-- /Education --*/
var education = document.getElementById('education');

var entryOne = document.createElement('div');
entryOne.className = "entry";

var entryOneTitle = '<h1>'+resumeData.education[0].title+'</h1>';
var entryOneOrganization = '<h2>'+resumeData.education[0].organization+'</h2>';
var entryOneYears = '<h1 class="text-right"><small>'+resumeData.education[0].startYear+'- '+resumeData.education[0].endYear+'</small></h1>';

var entryOneDescriptionOne = '<li>'+resumeData.education[0].descriptions[0]+'</li>';
var entryOneDescriptionTwo = '<li>'+resumeData.education[0].descriptions[1]+'</li>';
var entryOneDescriptions = '<ul>'+entryOneDescriptionOne+entryOneDescriptionTwo+'</ul>';

var entryOneHTML = '<div class="row">'+
        '<div class="col-md-9">'+entryOneTitle+entryOneOrganization+'</div>'+
        '<div class="col-md-3">'+entryOneYears+'</div>'+
      '</div>'+
      '<div class="row"><hr />'+entryOneDescriptions+'</div>';
entryOne.innerHTML = entryOneHTML;
education.appendChild(entryOne);

var entryTwo = document.createElement('div');
entryTwo.className = "entry";

var entryTwoTitle = '<h1>'+resumeData.education[1].title+'</h1>';
var entryTwoOrganization = '<h2>'+resumeData.education[1].organization+'</h2>';
var entryTwoYears = '<h1 class="text-right"><small>'+resumeData.education[1].startYear+'- '+resumeData.education[0].endYear+'</small></h1>';

var entryTwoDescriptionOne = '<li>'+resumeData.education[1].descriptions[0]+'</li>';
var entryTwoDescriptionTwo = '<li>'+resumeData.education[1].descriptions[1]+'</li>';
var entryTwoDescriptions = '<ul>'+entryTwoDescriptionOne+entryTwoDescriptionTwo+'</ul>';

var entryTwoHTML = '<div class="row">'+
        '<div class="col-md-9">'+entryTwoTitle+entryTwoOrganization+'</div>'+
        '<div class="col-md-3">'+entryTwoYears+'</div>'+
      '</div>'+
      '<div class="row"><hr />'+entryTwoDescriptions+'</div>';
entryTwo.innerHTML = entryTwoHTML;
education.appendChild(entryTwo);

/*-- /Education --*/
