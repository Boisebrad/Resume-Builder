/*-- /Experience --*/

(function() {
  'use strict';

  activate();

  function activate() {
    createEntries('experience');
    createEntries('education');
  }

  function createEntries(section) {    
    var sectionElem = document.getElementById(section);

    for(var e=0; e<resumeData[section].length; e++) {
      var data = resumeData[section][e];         

      var entryContent = createEntryContent(data);
      var entryHTML = createEntryHTML(entryContent);
      
      var entry = createEntry();
      entry.innerHTML = entryHTML;
      sectionElem.appendChild(entry);
    }
  }

  function createEntry() {
    var entry = document.createElement('div');
    entry.className = "entry";
    return entry;
  }

  function createEntryContent(data) {
    return {
      title: '<h1>'+data.title+'</h1>',
      organization: '<h2>'+data.organization+'</h2>',
      years: '<h1 class="text-right"><small>'+data.startYear+'- '+data.endYear+'</small></h1>',
      descriptions: createEntryDescriptions(data)
    }
  }

  function createEntryDescriptions(data) {
    var descriptions = '<ul>';
    for(var d=0; d<data.descriptions.length; d++) {
      var description = '<li>'+data.descriptions[d]+'</li>';
      descriptions += description;
    }
    descriptions += '</ul>';
    return descriptions;
  }

  function createEntryHTML(entryContent) {
    return '<div class="row">'+
      '<div class="col-md-9">'+entryContent.title+entryContent.organization+'</div>'+
      '<div class="col-md-3">'+entryContent.years+'</div>'+
      '</div>'+
      '<div class="row"><hr />'+entryContent.descriptions+'</div>';
  }
})();
/*-- /Experience --*/