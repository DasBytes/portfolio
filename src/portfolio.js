/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "pranta Das",
  title: "Hi all, I'm Pranta",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with React Native/ Flutter and some other cool libraries and frameworks."
  ),
resumeLink:
  "https://drive.google.com/uc?export=download&id=1bcxkJid_c9fpf6HGrES3gK-moYa8ldWm", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DasBytes",
  linkedin: "www.linkedin.com/in/pranta-das-4a08a3298",
  gmail: "prantadas85463@gmail.com",
  facebook: "https://www.facebook.com/pranta.das.948494",
  Instagram: "https://www.instagram.com/_prantadas_/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE MOBILE APP DEVELOPER FOCUSED ON BUILDING REAL WORLD PROJECTS",
  skills: [
    emoji(
      "⚡ Develop responsive and interactive user interfaces for web and mobile applications"
    ),
    emoji("⚡ Build cross-platform mobile apps using Flutter with clean UI/UX"),
    emoji(
      "⚡ Integrate backend services such as Firebase and SQL databases for authentication, data storage and deployment"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "dart",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "East Delta University",
      logo: require("./assets/images/East delta.png"),
      subHeader: "B.Sc. in Computer Science and Engineering",
      duration: "September 2022 - Present",
      desc: "Currently pursuing undergraduate studies with a focus on software development, mobile app development, and problem solving.",
      descBullets: [
        "CGPA: 3.65 out of 4.00",
        "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering"
      ]
    },
    {
      schoolName: "Kazem  Ali School And College",
      logo: require("./assets/images/kasc.png"),
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "2019 - 2021",
      desc: "Completed higher secondary education with a science background.",
      // descBullets: [
      //   "Focused on Physics, Chemistry, Mathematics",
      //   "Built strong analytical and problem-solving foundation"
      // ]
    },
    {
      schoolName: "Alkaran Nur Ahmed City Corporation High School",
      logo: require("./assets/images/Alkaran school.png"),
      subHeader: "Secondary School Certificate (SSC)",
      duration: "2017 - 2019",
      desc: "Completed secondary education.",
      // descBullets: [
      //   "Developed interest in technology and programming",
      //   "Strong academic performance"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const bigProjects = {
  display: true,                    // ← ONE display key only (removed the second one)
  title: "Projects",
  subtitle: "PROJECTS I HAVE BUILT TO APPLY MY SKILLS IN REAL-WORLD SCENARIOS",
  projects: [

    {
      image: require("./assets/images/harvestguard.png"),
      projectName: "HarvestGuard – Smart Farming Assistant",
      projectDesc: "AI-powered agriculture system with weather integration, crop tracking, and plant disease detection for Bangladeshi farmers.",
      footerLink: [
        { name: "View Code",    url: "https://github.com/DasBytes/harvestguard-bd" },
        { name: "View Website", url: "https://harvestguard-bd.netlify.app/" } 
      ]
    },

    {
      image: require("./assets/images/travel.png"),
      projectName: "Travel Booking System (MERN)",
      projectDesc: "Full-featured tours and travel booking platform with authentication, booking, search and review system.",
      footerLink: [
        { name: "View Code",    url: "https://github.com/DasBytes/Travel-Booking-System" },
         { name: "View Website", url: "travel-booking-bd.netlify.app" } 
      ]
    },

    {
      image: require("./assets/images/social.png"),
      projectName: "Full Stack Social Media App",
      projectDesc: "Social platform with post, comment, reaction and profile features built using React Native, Node.js and Supabase.",
      footerLink: [
        { name: "View Code", url: "https://github.com/DasBytes/Full-stack-social-media-app" }
        // No live website — mobile app, not hosted
      ]
    },

    {
      image: require("./assets/images/chat.png"),
      projectName: "Flutter Firebase Chat App",
      projectDesc: "Real-time group chat app with authentication and messaging using Flutter and Firebase.",
      footerLink: [
        { name: "View Code", url: "https://github.com/DasBytes/chatappFirebase" }
        // No live website — mobile app
      ]
    },

    {
      image: require("./assets/images/smarthome.png"),
      projectName: "Smart Home Automation (IoT)",
      projectDesc: "Android-based IoT system to control fan and light using Firebase, NodeMCU and real-time data.",
      footerLink: [
        { name: "View Code", url: "https://github.com/DasBytes/Smart-Home-Automation" }
        // No live website — hardware/IoT project
      ]
    },

    {
      image: require("./assets/images/imagevault.png"),
      projectName: "My Image Vault",
      projectDesc: "Android app for secure cloud-based image storage and management built using Java.",
      footerLink: [
        { name: "View Code", url: "https://github.com/DasBytes/my-image-vault" }
      ]
    },

    {
      image: require("./assets/images/weather.png"),
      projectName: "Weather App",
      projectDesc: "Weather forecasting app using API integration with clean and responsive UI.",
      footerLink: [
        { name: "View Code",    url: "https://github.com/DasBytes/Weather-App" },
        // { name: "View Website", url: "https://weather.example.com" } // ← add if hosted
      ]
    },

    {
      image: require("./assets/images/doctor.png"),
      projectName: "Doctor Portfolio Website",
      projectDesc: "A professional portfolio website designed for doctors with modern UI and responsive layout.",
      footerLink: [
        { name: "View Code",    url: "https://github.com/DasBytes/doctor_portfolio" },
        // { name: "View Website", url: "https://doctor.example.com" } // ← add if hosted
      ]
    },

    {
      image: require("./assets/images/depression.png"),
      projectName: "Banglish Depression Classifier",
      projectDesc: "Three-stage NLP-based system to detect depression in Banglish social media text using TensorFlow, Keras, and scikit-learn.",
      footerLink: [
        { name: "View Code", url: "https://github.com/DasBytes/three-stage-banglish-depression-classifier" }
      ]
    },

  ]
  // ↑ NO second `display: true` here — that was the duplication bug
};


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Hackathons, Certifications, and Academic Achievements I have earned so far!",

  achievementsCards: [
    {
      title: "Runner-up – EDU Engineering Day Hackathon 2025",
      subtitle: "Secured 2nd place in a competitive engineering hackathon.",
      image: require("./assets/images/hackathon.png"),
      imageAlt: "EDU Hackathon Award",
      footerLink: [
        { name: "View Details", url: "https://www.linkedin.com/posts/pranta-das-4a08a3298_engineeringday-world-programming-activity-7309617982551244800-fxv7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgI4PgB_LcL49eKfRAZ4ZLMOruNj_TA4IM" } // optional link to award letter
      ]
    },
    {
      title: "Machine Learning with Python – IBM",
      subtitle: "Completed Machine Learning course from IBM, gaining hands-on experience in Python and ML algorithms.",
      image: require("./assets/images/mlCert.png"),
      imageAlt: "IBM ML Certificate",
      footerLink: [
        { name: "View Certificate", url: "https://www.coursera.org/account/accomplishments/verify/N9WYVEKGQPPK" } // optional certificate link
      ]
    },
    {
      title: "React Native Practical Guide [2025]",
      subtitle: "Completed React Native course conducted by Maximilian Schwarzmüller.",
      image: require("./assets/images/reactNative.png"),
      imageAlt: "React Native Certificate",
      footerLink: [
        { name: "View Certificate", url: "https://drive.google.com/file/d/1yxWORjwa4BdI2FlcE7cDygXWYo6JIqSZ/view?usp=sharing" } // optional certificate link
      ]
    },
    {
      title: "JavaScript Workshop – Ostad",
      subtitle: "Completed JavaScript Workshop for Absolute Beginners conducted by Ostad.",
      image: require("./assets/images/jsWorkshop.png"),
      imageAlt: "JavaScript Workshop Certificate",
      footerLink: [
        { name: "View Certificate", url: "https://ostad.app/share/certificate/c24959-pranta-das" } // optional certificate link
      ]
    }
  ],

  display: true // Set false to hide this section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+880120000000",
  email_address: "prantadas85463@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
