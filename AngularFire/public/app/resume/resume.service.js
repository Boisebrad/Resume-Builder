(function() {
  'use strict';

  angular
    .module('app')
    .factory('ResumeService', ResumeService);

  ResumeService.$inject = [];

  function ResumeService() {
    var resumeData = initResumeData();

    var service = {
      getEducation,
      setEducation,
      getExperience,
      setExperience,
      getSkills,
      setSkills,
      getSummary,
      setSummary
    };

    return service;

    /////////////////////////

    function initResumeData() {
      return {
        summary: {
          background: 'http://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/19024974_2002487333371160_4157140476321252058_o.jpg?oh=5ce062cd1d67a0520f481d83dde992b3&oe=59E5162B',
          profile: 'http://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/19012_1650394225247141_1654531639405650005_n.jpg?oh=125a49b476ddc2f3b7eb545530aca5a1&oe=59E21610',
          name: 'Brad Gutenberger',
          title: 'QA Tester',
          location: 'Boise, ID',
          phone: '(208) 841-3052',
          email: 'Boisebrad@gmail.com'
        },
        skills: [
          {id: 1, skill: 'Quality Assurance'}, 
          {id: 2, skill: 'Agile/Scrum'}, 
          {id: 3, skill: 'Functional Testing'}, 
          {id: 4, skill: 'XML/Json'}, 
          {id: 5, skill: 'Jira'}, 
          {id: 6, skill: 'Test Planning'}, 
          {id: 7, skill: 'Adaptive'}, 
          {id: 8, skill: 'Star Wars Knowledge'}
          
        ],
        experience: [
          {
            title: 'QA Tester',
            organization: 'Quality Logic',
            startYear: 2015,
            endYear: 2017,
            descriptions: [
              'Report, regress and monitor Bugs life cycle until satisfactorily resolved.',
              'Perform a variety of Hardware-Software testing such as Audio & Video Testing, UI Navigation, API Testing.'
            ]
          },    
          {
            title: 'QA Inspector',
            organization: 'Western Electronics',
            startYear: 2011,
            endYear: 2015,
            descriptions: [
              'Prepped components for circuit board assembly.',
              'Visually inspected PCBA’s as they come off the assembly line.'
            ]
          },
          {
            title: 'QA Tester',
            organization: 'Cradlepoint',
            startYear: 2012,
            endYear: 2013,
            descriptions: [
              'Inspected returned products and triaged for refurbishing.',
              'Reworked/ Refurbished router PCBA’s and final assemblies.'
            ]
          }
        ],
        education: [  
          {
            title: 'High School Diploma',
            organization: 'Mountain View High School',
            startYear: 2002,
            endYear: 2006,
            descriptions: [
              'Studied the sciences and car mechanics.',
              'Built my first computer for gaming.'
            ]
          },
          {
            title: 'Front end Foundations',
            organization: 'Trailhead Boise',
            startYear: 2017,
            endYear: 2017,
            descriptions: [
              'Practiced the building of web sites with HTML, CSS and Bootstrap.',
              'Built resume builder website using JavaScript and Angular.js.'
            ]
          }
        ]
      };
    }

    function getEducation() {
      return resumeData.education;
    }

    function setEducation(education) {
      resumeData.education = education;
    }

    function getExperience() {
      return resumeData.experience;
    }

    function setExperience(experience) {
      resumeData.experience = experience;
    }

    function getSkills() {
      return resumeData.skills;
    }

    function setSkills(skills) {
      resumeData.skills = skills;
    }

    function getSummary() {
      return resumeData.summary;
    }

    function setSummary(summary) {
      resumeData.summary = summary;
    }
  }
})();