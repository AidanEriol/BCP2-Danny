'use strict'

var projects = [];

 function Project(rawDataObject) {
  this.projectName = rawDataObject.projectName;
  this.projectInfo = rawDataObject.projectInfo;
  this.projectPhoto = rawDataObject.projectPhoto;
  this.finishedDate = rawDataObject.finishedDate;
}

Project.prototype.toHtml = function() {
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('.name').html(this.projectName);
  $newProject.find('p').html(this.projectInfo);
  $newProject.find('.projectPhoto').attr('src', this.projectPhoto);
  $newProject.find('time').attr('pubdate', this.finishedDate);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.finishedDate)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
}

rawData.forEach(function(projectObject) {
  projects.push(new newProject(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

function myFunction(x) {
    x.classList.toggle("change");
}
