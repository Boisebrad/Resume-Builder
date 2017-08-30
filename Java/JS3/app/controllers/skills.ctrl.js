/*-- Skills --*/

(function() {
  'use strict';

  activate();

  function activate() {
    
    var skillsList = document.getElementById('skills-list');

    for(var s = 0; s < resumeData.skills.length; s++) {
      var skill = document.createElement('li');
      var skillText = document.createTextNode(resumeData.skills[s]);
      skill.appendChild(skillText);
      skillsList.appendChild(skill);
      if((s+1)%3 === 0) {
        var brElem = document.createElement('br');
        skillsList.appendChild(brElem);
      console.log()
      }
    }
    bindEditButton();    
  }
  function bindEditButton() {		
		$('#edit-skills').click(function() {
			$('#skills-list').empty();
			for(var s in resumeData.skills) {
				var skill = resumeData.skills[s];
				$('#skills-list')
					.append('<li><label>Skill: </label><input style="color: black;" type="text" value="'+skill.name+'">'+
						'<span style="color: white;" class="glyphicon"></span><br></li>');
			}
				
			$(this).parent().append('<button id="save-skills" class="btn btn-primary pull-right">Save</button>');
			bindSaveButton();
			
		});
	}

	function bindSaveButton() {
		$('#save-skills').click(function() {
			saveSkillsArray();
			$('#skills-list').empty();
			$(this).parent().append('<button id="edit-skills" class="btn btn-default pull-right">Edit</button>');
			$(this).remove();
			activate();
		});
	}

	

	function saveSkillsArray() {
		var skillsList = $('#skills-list').children();
		var skillsArray = [];
		var s = 0;
		while(s < skillsList.length) {
			var skill = $(skillsList[s]);
			var skillsObj = {};
			skillsObj.name = skill.children()[1].value;
			skillsArray.push(skillsObj);
			s++;
		}
		resumeData.skills = skillsArray;
	}
})();
/*-- /Skills --*/