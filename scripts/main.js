'use strict'

var projects = [];

function Projects(rawDataObject) {
  this.projectName = rawDataObject.projectName;
  this.projectInfo = rawDataObject.projectInfo;
  this.finishedDate = rawDataObject.finishedDate;
}

Projects.prototype.toHtml = function() {
  var $template = $('template').html();
  var compile = Handlebars.compile($template);
  $('main').append(compile(this));
}
