'use strict'

var projects = [];

 function Project(rawDataObject) {
  this.projectName = rawDataObject.projectName;
  this.projectInfo = rawDataObject.projectInfo;
  this.projectPhoto = rawDataObject.projectPhoto;
  this.finishedDate = rawDataObject.finishedDate;
}

newProject.prototype.toHtml = function() {
  var $addProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h1').html(this.projectName);
  $newProject.find('p').html(this.projectInfo);
  $newProject.find('.projectPhoto').attr('src', this.projectPhoto);
  $newProject.find('time').attr('pubdate', this.finishedDate);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.finishedDate)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newArticle.append('<hr>');
  return $addProject;
}

completedProjects.forEach(function(projectObject) {
  projects.push(new newProject(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
