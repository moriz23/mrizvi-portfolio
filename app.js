const imgOne = document.querySelector("#img-1");
const imgTwo = document.querySelector("#img-2");
const title = document.querySelector("#title");
const subTitle = document.querySelector("#subtitle"); 
const text = document.querySelector("#popup-text");
const link = document.querySelector("#project-link");
const popupDiv = document.querySelector("#popup");
const popupContent = document.querySelector("#popup-content");
const closeModal = document.querySelector("#close-modal");


//data for each project shown in respective modal
popupData = {
  blank: {
    imgOne: " ",
    imgTwo: " "
  }, 
  pvitlHome: {
    imgOne: "img/pvitl-home-pop-2.png",
    imgTwo: "img/pvitl-home-pop-1.png",
    title: "Pvitl Home Website",
    subtitle: "Splash Page for the Pvitl Application",
    text: "This is the website for the PVITL Web Application, which explains what the application does and the features that are included. My job was to create the website from the mockups and make it responsive for all screen sizes. I added a pattern of having each section alternate from a white background to a linear gradient colorway. I also added animations when you scroll (AOS Library) to make the user experience more engaging and it looks cool. The website includes the home page, pricing page, sign up page, and a login page. The website was written with AngularJS, Ruby on Rails, HTML, CSS, SASS, Foundation and JavaScript.",
    link: "https://iworldreg.iworldreg.com/"
  },
  pvitlApp: {
    imgOne: "img/pvitl-app-pop-2.png",
    imgTwo: "img/pvitl-app-pop-1.png",
    title: "Pvitl Application",
    subtitle: "Pvitl Application Web App",
    text: "Pvitl Application is a database platform that allows businesses and companies (NBA games, Oscars, Emmys, etc) to manage large amount of data collaboratively. I was the Front-End Developer for this project and I helped designed and structured how all of the different features would look. Some of the features I worked on were the dashboard, form builder, search page, database tables, and more. I did some backend work such as routing and storing data, but I mainly did tasks that dealt with the frontend. The application was written with AngularJS, Ruby, Ruby on Rails, JavaScript, jQuery, CSS, SASS, Foundation, and HTML. (In order to see the application you have to sign up and choose a payment plan)",
    link: "https://iworldreg.iworldreg.com/"
  },
  gymtrition: {
    imgOne: "img/gym-popup-1.png",
    imgTwo: "img/gym-card-header.png",
    title:"Gymtrition Website",
    subtitle: "Group Project in Bootcamp",
    text: "This was the first group project I had to do at the Rutgers Bootcamp in 2016. The idea my group and I had was to create a site that allows users to find the closest gym, create a workut routine, and find nutritional information of certain foods. My role was the Front-End Developer and I was assigned to deign and struture how the site will look. I created a parallax scrolling site tht shows an image before the content is shown. I also helped design the nutritional info and workout routine sections. The website was written with HTML, CSS, Materialize.CSS, Javascript, and jQuery.",
    link: "https://gymtrition.herokuapp.com/"
  },
  youblog: {
    imgOne: "img/blog-app-1.png",
    imgTwo: "img/blog-app-2.png",
    title:"YouBlog Website",
    subtitle: "Solo Practice Project",
    text: "I created a blog website after I completed the bootcamp so that I could gain some more practice in full stack developemnt. The YouBlog site follows the RESTful routing structure in where I created different HTTP requests to send and retrieve data. The site allows users to create, edit, read, and post blog posts. I also worked on the back-end by creating data schemas, storing data from users, and retrieving data to be displayed on the front-end. The website was written in HTML, CSS, Node.JS, MongoDB, Javascript, jQuery, and Semantic UI.",
    link: "https://youblogapp.herokuapp.com/"
  },
  toneAnalyzer: {
    imgOne: "img/toneAnalyzer-1.png",
    imgTwo: "img/toneAnalyzer-2.png",
    title: "Tone Analyzer",
    subtitle: "Group Project in Bootcamp",
    text: "This was the final group project I had to do at the bootcamp. My group came up with an idea of having a site that allows users to write emails and have them be analyzed. We used IBM's Watson Tone Analyzer API, which examines the text of the written email and displays the emotion. I worked on the front-end and contribute in designing and structuring the website. Some of my tasks were creating the splash page, making it responsive, setting up the main page, creating a sidenav, styling the email editor, and designing the graphs. The website was written in HTML, CSS, Node.JS, MongoDB, Javascript, jQuery, Bootstrap, and AngularJS.",
    link: "https://toneanalyzer.herokuapp.com/"
  },
  rateCamp: {
    imgOne: "img/rate-camp-1.png",
    imgTwo: "img/rate-camp-2.png",
    title: "Rate Camp Website",
    subtitle: "Solo Practice Project",
    text: "RateCamp was another website I did after the bootcamp in where my focus was to gain more experience with the back-end. The site allows users to create an account, post a camp site by adding an image and description, and commenting on different posts. Some of the things I learned were user authentication, RESTful routing, and databases.  The website was written in HTML, CSS, Node.JS, MongoDB, Javascript, jQuery, Bootstrap.",
    link: "https://ratecamp.herokuapp.com/"
  },
  dentist: {
    imgOne: "img/dentist-1.png",
    imgTwo: "img/dentist-2.png",
    title:"Infinite Website",
    subtitle: "Unfinished Website for Dentist Office",
    text: "This was my first paid project in which I was hired to create a website for a dentist office. The site included information, images, and videos of the types of servces the office provides. My boss projected his ideas on a white baord on how he wanted the site to look, and I was able to take his vision and display it onto the site. I was unable to complete it, due to the fact that my boss was let go and he had no need to finish the project. However, I am proud of what I completed so far and still want to include it in my portfolio. The website was written in HTML, CSS, Javascript, jQuery, and Bootstrap.",
    link: "https://desolate-mesa-14985.herokuapp.com/"
  }
}

//function to change the text of modal depending on which project was clicked
function popup(projects){
  imgOne.src = projects.imgOne;
  imgTwo.src = projects.imgTwo;
  title.innerText = projects.title;
  subTitle.innerText = projects.subtitle;
  text.innerText = projects.text;
  link.href = projects.link;
}

//function that opens modal and chnages the text of modal
function modalClickEvent(querySelector, project) {
  document.querySelector(querySelector).addEventListener("click", function(){
    openModal() 
    popup(project);
  });
}

//open modal
function openModal() {
  popupDiv.style = "opacity: 1; visibility: visible;"
  popupContent.style = "opacity: 1; transform: translate(-50%, -50%) scale(1);"
}

//close modal
closeModal.addEventListener("click", function(){
  popupDiv.style = "opacity: 0; visibility: hidden;"
  popupContent.style = "opacity: 0;"
  popupData.blank.imgOne;
  popupData.blank.imgTwo;
});

//shortens text for front side of card
function frontSideCardText(text, id) {
  const str = text
  const res = str.substring(0, 250);
  document.querySelector(id).innerText = res + "...";
}

//PVITL Home Page Modal
modalClickEvent("#pvitl-home", popupData.pvitlHome);

//PVITL App Modal
modalClickEvent("#pvitl-app", popupData.pvitlApp);

//Gymtrition Modal
modalClickEvent("#gymtrition", popupData.gymtrition);

//YouBlog Modal
modalClickEvent("#blog-app", popupData.youblog);

//Tone Analyzer Modal
modalClickEvent("#tone-analyzer", popupData.toneAnalyzer);

//Rate Campe Modal
modalClickEvent("#rate-camp", popupData.rateCamp);

//Dentist Modal
modalClickEvent("#dentist-site", popupData.dentist);

//PVITL Home Page Front Side Text
frontSideCardText(popupData.pvitlHome.text, "#pvitl-home-front-card");

//PVITL App Front Side Text
frontSideCardText(popupData.pvitlApp.text, "#pvitl-app-front-card");

//Gymtrition Front Side Text
frontSideCardText(popupData.gymtrition.text, "#gymtrition-front-card");

//YouBlog Front Side Text
frontSideCardText(popupData.youblog.text, "#you-blog-front-card");

//Tone Analyzer Front Side Text
frontSideCardText(popupData.toneAnalyzer.text, "#tone-analyzer-front-card");

//Rate CampFront Side Text
frontSideCardText(popupData.rateCamp.text, "#rate-camp-front-card");

//Dentist Side Text
frontSideCardText(popupData.dentist.text, "#dentist-site-front-card");


