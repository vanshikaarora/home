// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Vanshika",
  middleName: "",
  lastName: "Arora",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/vanshikaarora",
    },  
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/vanshikaarora/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/vanshikaiitism/",
    },
    {
      image: "fa-medium",
      url: "https://www.medium.com/@vanshikaa937/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/vanshikaarora.png"),
  imageSize: 375,
  message:
    "My name is Vanshika Arora. I am pursuing Dual Degree (B.Tech+M.Tech) in Mathematics and Computing from Indian Institute of Technology (IIT ISM) Dhanbad with an outstanding academic record.\n I am a candidate with profound fundamentals in computer science, incredible work experiences and an inquistive bent of mind. I believe hard work along with Team Work is the key to make an impact. ",
  resume: require("../editable-stuff/resume.pdf"),
};

const experience ={
show: true,}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "vanshikaarora", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["DeliveryBoy", "apps-android-commons","GoogleSTT","Concetto"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Knowledge is the greatest gift. Therefore, I mentor students in their early career stage to help them achieve what they dream for. As a part of which I have mentored students under 17 years of age to learn how to contribute to Open Source under the program Google code-in. I am also mentor at Codess.cafe which is a Pro-bono initiative for collegiate women in tech, helping them unlock their true potential.",
  images: [
    { 
      img: require("../editable-stuff/googlecodein.png"), 
      label: "Google Code-in", 
      paragraph: "Mentoring young students to contribute to Open Source" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Data Structures", value: 90 },
    { name: "C/C++", value: 75 },
    { name: "Android Development", value: 85 },
    { name: "Github", value: 65 },
    { name: "Algorithms", value: 90 },
    { name: "OOPS", value: 70 },
    { name: "OS", value: 70 },
    { name: "Java", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Team Work", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Dedication", value: 90 },
    { name: "Communication", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

const layout ={
show: true,
}

// Blog SECTION
 const blog = {
   show: true,
   heading: "My Blog",
    
 };


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently open for Summer Internship opportunities! If you know of any positions available, if you have any questions,(I am available for relocation) or if you just want to say hi, please feel free to email me at",
  email: "shiaro29@gmail.com",
};

export { navBar, mainBody, about,experience, repos, skills, leadership, blog,getInTouch, layout };
