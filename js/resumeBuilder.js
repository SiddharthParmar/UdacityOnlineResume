/*
resumeBuilderProject - Siddharth Parmar
 */
var bio = {
			"name": "Siddharth Parmar",
            "role" : "Web Developer",
            "contacts":{
            		"generic":"Contact",
            		"mobile": "650-353-8927",
                  	"email": "siddharth989@gmail.com",
                  	"github": "SiddharthParmar",
                  	"location": "Sunnyvale"
            	},    
            "welcomeMessage": "I am a Front-end Ninja", 
            "skills": ["C", "C++", "HTML", "CSS", "JavaScript"],
            "biopic": "images/profile.jpg",
            "display":function(){
						var formattedName = HTMLheaderName.replace("%data%",bio.name);
						var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
						var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
						var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
						var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
						var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
						var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
						var formattedbiopic = HTMLbioPic.replace("%data%",bio.biopic);
						$("#header").prepend(formattedRole);
						$("#header").prepend(formattedName);
								$("#topContacts").append(formattedMobile);
								$("#topContacts").append(formattedEmail);
								$("#topContacts").append(formattedGithub);
								$("#topContacts").append(formattedLocation);
						$("#header").append(formattedbiopic);
						$("#header").append(formattedwelcomeMsg);
						if(bio.skills.length>0)
						{
							$("#header").append(HTMLskillsStart);
							for(var i = 0;i<bio.skills.length;i++)
							{
								var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
								$("#skills").append(formattedSkill);      
							}
						}
					}					
			};
var education = 
	{
			"schools": [
                { 
                 "name": "Santa Clara University",
                 "location": "Santa Clara",
                 "degree": " Bachelors",
                 "majors": ["Computer Engineering"],
                 "dates": "   2008-2012",
                 "url": "https://www.scu.edu/"
             	},
             	{ 
                 "name": "Saint Mary's College",
                 "location": "Moraga",
                 "degree": " Masters",
                 "majors": ["Marketing"],
                 "dates": "   2015-2017",
                 "url": "https://www.stmarys-ca.edu/"
             	}
            ],
            "onlineCourses": [
                 {
                 	"title": "Front-End Nanodegree",
                 	"school": "Udacity",
                 	"dates": "April-August",
                 	"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
                 }
            ],
            "display":function(){
            		var formattedSchoolMajor;
            		if(education.schools.length>0)
            		{
						for(var i =0; i<education.schools.length;i++)
						{
							$("#education").append(HTMLschoolStart);
							var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
							$(".education-entry:last").append(formattedSchoolName);
							var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
							$(".education-entry:last").append(formattedSchoolDegree);
							var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
							$(".education-entry:last").append(formattedSchoolDates);
							var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
							$(".education-entry:last").append(formattedSchoolLocation);
							for(var j=0; j<education.schools[i].majors.length;j++)
							{

								if(education.schools[i].majors.length>0)
								formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);	
								$(".education-entry:last").append(formattedSchoolMajor);	
							}
						}
					}
					
					if(education.onlineCourses.length>0)
					{
						$("#education").append(HTMLonlineClasses);

						for(var j =0; j<education.onlineCourses.length;j++)
						{
							
							$("#education").append(HTMLschoolStart);
							var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
							$(".education-entry:last").append(formattedOnlineTitle);
							var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
							$(".education-entry:last").append(formattedOnlineSchool);
							var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
							$(".education-entry:last").append(formattedOnlineDates);
							var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);
							$(".education-entry:last").append(formattedOnlineURL);		
						}
					}
            }
	};
var work = {
			"jobs":[
                 {
                 	"employer": "Gymer Systems", 
                 	"title": "Co-Founder, CTO", 
                 	"location": "Mountain View", 
                 	"dates": "June 2017-Present",
                 	"description": "Designed and implemented the back-end architecture for our IoT device on AWS. Contributed to front-end development, UI design, app features and business strategy."
                 },
                 {
                 	"employer": "California Systems", 
                 	"title": "Director Of Professional Services", 
                 	"location": "Santa Clara", 
                 	"dates": "March 2014-April 2015",
                 	"description": "Managed key accounts and customers like TCS, HCL America, HP, NetApp, etc. Developed a deep understanding of various software applications and tools used by customers to assign appropriate technical resource and coordinate with end customer on implementation. Consulted with managerial, engineering, and technical personnel to clarify program intent and requirements of end customer. Identified problems and suggest changes with resource allocation. Coordinated offshore vendors for various technical resource requirements and manage a team of 3-5 members"
                 } ,
                 {
                 	"employer": "AurionPro", 
                 	"title": "Junior Software Developer", 
                 	"location": "San Ramon", 
                 	"dates": "March 2014-April 2015",
                 	"description": "Set up a new network on infiniband and installed Linux, Centos and other required drivers. Made an installation/troubleshooting guide for the future. Developed Mobile Enterprise Applications and designed the UI/UX. Lead a team of two engineers to allocate work, provide technical assistance and perform feedback reviews."
                 }  
            
             ],
             "display":function()
             	{
             		if(work.jobs.length>0)
             		{
						$("#workExperience").append(HTMLworkStart);
						for(var i =0; i<work.jobs.length;i++)
						{	
							var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
							var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
							var formattedEmployerTitle = formattedEmployer+formattedTitle;
							$(".work-entry:last").append(formattedEmployerTitle);
							var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
							$(".work-entry:last").append(formattedDates);
							var formattedWLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
							$(".work-entry:last").append(formattedWLocation);
							var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
							$(".work-entry:last").append(formattedDescription);
							
						}
					}
             	}    	
			};
var projects = {
			"project": [
            {
                  	"title": "Portfolio Website", 
                  	"dates": "June 2017",
                  	"description": "Designed a responsive portfolio web page using bootstrap",
                  	"images": ["http://via.placeholder.com/350x250","images/little.jpg","http://via.placeholder.com/350x250"]
            }
        ],
        "display":function()
        {
        	var formattedProjectImage;
        	if(projects.project.length>0)
        	{
				$("#projects").append(HTMLprojectStart);
				for(var i =0; i<projects.project.length;i++)
					{
						var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
						$(".project-entry:last").append(formattedProjectTitle);
						var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.project[i].dates);
						$(".project-entry:last").append(formattedProjectDate);
						var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
						$(".project-entry:last").append(formattedProjectDescription);
						for(var j=0; j<projects.project[i].images.length;j++)
							{
								if(projects.project[i].images.length>0)
								formattedProjectImage = HTMLprojectImage.replace("%data%",projects.project[i].images[j]);	
								$(".project-entry:last").append(formattedProjectImage);	
							}
					}
			}
        }
};
$("#mapDiv").append(googleMap);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);
bio.display();
education.display();
work.display();
projects.display();



         
