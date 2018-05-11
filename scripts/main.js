'use strict'

var projects = [];

function Projects(rawDataObject) {
  this.projectName = rawDataObject.projectName;
  this.projectInfo = rawDataObject.projectInfo;
  this.finishedDate = rawDataObject.finishedDate;
}
