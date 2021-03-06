
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", fullName);
  var formattedRole = HTMLheaderRole.replace("%data%", role); 
  $("#header").prepend(formattedName + formattedRole);

  ci = bio.contacts;
  cdata = HTMLmobile.replace("%data%", ci.mobile);
  cdata += HTMLemail.replace("%data%", ci.email);
  cdata += HTMLtwitter.replace("%data%", ci.twitter);
  cdata += HTMLgithub.replace("%data%", ci.github);
  cdata += HTMLlocation.replace("%data%", ci.location);
  $("#topContacts").append(cdata);
  $("#footerContacts").append(cdata);
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
 
  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(item) {
        var formattedSkill = HTMLskills.replace("%data%", item);
        $('#skills').append(formattedSkill);
    });
  }
}

bio.display();


work.insertJob = function(job) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job['employer']);
        var formattedTitle = HTMLworkTitle.replace("%data%", job['title']);
        var formattedLocation = HTMLworkLocation.replace("%data%", job['location']);
        var formattedDates = HTMLworkDates.replace("%data%", job['dates']);
        var formattedDescription = HTMLworkDescription.replace("%data%", job['description']);
        $('.work-entry').last().append(formattedEmployer + 
                                     formattedTitle + 
                                     formattedLocation + 
                                     formattedDates +
                                     formattedDescription);
}
    
work.display = function() {
    work.jobs.forEach( function(job) {
        work.insertJob(job);
    });
}

work.display();

$(document).click(function(loc) {
    logClicks(loc.clientX, loc.clientY);
});

$("#main").append(internationalizeButton);


projects.insertProject = function(project) {
  $('#projects').append(HTMLprojectStart);
  var title = HTMLprojectTitle.replace("%data%", project.title);
  var dates = HTMLprojectDates.replace("%data%", project.dates);
  var description = HTMLprojectDescription.replace("%data%", project.description);
  var image = HTMLprojectImage.replace("%data%", project.image);
  $('.project-entry:last').append(title + dates + description + image);
}

projects.display = function() {
    this.projects.forEach(function(project) {
      projects.insertProject(project);
    });
};

projects.display();

education.insertSchool = function(item) {
    console.log(item);
    $("#education").append(HTMLschoolStart);
    data = "";
    data += HTMLschoolName.replace("%data%", item.name).replace("#", item.url);
    data += HTMLschoolDegree.replace("%data%", item.degree);
    data += HTMLschoolDates.replace("%data%", item.dates);
    data += HTMLschoolLocation.replace("%data%", item.location);
    item.majors.forEach(function(major) {
      data += HTMLschoolMajor.replace("%data%", major);
    });
    $('.education-entry').last().append(data);
} 

education.insertOnlineCourse = function(item) {
    $("#education").append(HTMLschoolStart);
    data = HTMLonlineTitle.replace("%data%", item.title).replace("#", item.url);
    data += HTMLonlineSchool.replace("%data%", item.school);
    data += HTMLonlineDates.replace("%data%", item.date);
    item.url.forEach(function(url) {
      data += HTMLonlineURL.replace("%data%", url).replace("#", url);
    });
    $(".education-entry").last().append(data);
}

education.display = function() {

  education.schools.forEach(function(item) {
    education.insertSchool(item);
  });

  $("#education").append(HTMLonlineClasses);
  
  education.onlineCourses.forEach(function(item) {
    education.insertOnlineCourse(item);
  });

}

education.display();

$("#mapDiv").append(googleMap);
