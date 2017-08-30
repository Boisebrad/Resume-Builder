//summary
var summary = document.getElementById("summary");
summary.setAttribute('style', 'background-image: url("'+resumeData.summary.background+'")');


//profile Img
var profileImg = document.createElement('img');
profileImg.setAtribute('src', resumeData.summary.profile);
var profile = document.getElementById('profile');
profile.append(profileImg);

//information
// Steps 1 & 2: Create Elements and Wrap Data in them
var nameText = document.createTextNode(resumeData.summary.name);     // Create a text node
var titleText = document.createTextNode(resumeData.summary.title);     // Create a text node
var locationText = document.createTextNode(resumeData.summary.location);     // Create a text node
var phoneText = document.createTextNode(resumeData.summary.phone);     // Create a text node
var emailText = document.createTextNode(resumeData.summary.email);     // Create a text node

var nameText = document.createTextNode(resumeData.summary.name);     // Create a text node
name.appendChild(t);

// Step 3: Get and/or Create Parent Element(s)
var summaryName = document.createElement('h1')                // Create a <h1> element
var summaryTitle = document.createElement('h2')
var summaryLocation = document.createElement('h2')
var summaryPhone = document.createElement('h3')
var summaryEmail = document.createElement('h3')

var.information = document.getElementById('information');

// Step 4: Append Child Elements to Parent Element(s)
summaryName.append(nameText);
summaryTitle.append(titleText);
summaryLocation.append(locationText);
summaryPhone.append(phoneText);
summaryEmail.append(emailText);

information.append(summaryName);
information.append(summaryTitle);
information.append(summaryLocation);
information.append(summaryPhone);
information.append(summaryEmail);

//skills


// Step 1: Create Elements
var qualityAssurance =document.createElement('li');
var agileScrum =document.createElement('li');
var functionalTesting =document.createElement('li');
var xmlJson =document.createElement('li');
var jira =document.createElement('li');
var testPlanning =document.createElement('li');
var adaptive=document.createElement('li');
var starWarsKnowledge =document.createElement('li');

// Step 2: Integrate Data into Elements
qualityAssurance.innerHTML = resumeData.skills[0];
agileScrum.innerHTML = resumeData.skills[1];
functionalTesting.innerHTML = resumeData.skills[2];
xmlJson.innerHTML = resumeData.skills[3];
jira.innerHTML = resumeData.skills[4];
testPlanning.innerHTML = resumeData.skills[5];
adaptive.innerHTML = resumeData.skills[6];
starWarsKnowledge.innerHTML = resumeData.skills[7];

// Step 3: Get and/or Create Parent Element(s)
var skillsList = document.getElementById('skills-list')

// Step 4: Append Child Elements to Parent Element(s)
skillsList.append(qualityAssurance);
skillsList.append(agileScrum);
skillsList.append(functionalTesting);
skillsList.append(xmlJson);
skillsList.append(jira);
skillsList.append(testPlanning);
skillsList.append(adaptive);
skillsList.append(starWarsKnowledge);

//experience



//education


//contact