const imgOne = document.querySelector("#img-1");
const imgTwo = document.querySelector("#img-2");
const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle"); 
const text = document.querySelector("#popup-text");
const link = document.querySelector("#project-link");

popupData = {
  "pvitlHome": {
    "imgOne": "img/pvitl-home-pop-2.png",
    "imgTwo": "img/pvitl-home-pop-1.png",
    "title": "Pvitl Home Website",
    "subtitle": "Splash Page for the Pvitl Application",
    "text": "This is the website for the PVITL Web Application, which explains what the application does and the features that are included. I created this site from different mockups given to me and added my own tweaks. My job was to create the website from the mockups and make it responsive for all screen sizes. I added a pattern of having each section alternate from a white background to a linear gradient colorway. I also added animations when you scroll (AOS Library) to make the user experience more engaging and it looks cool. The website includes the home page, pricing page, sign up page, and a login page. There are other links such as About Us and Product Overview, however there are just anchor links. The website was written with AngularJS, Ruby on Rails, HTML, CSS, SASS, Foundation and JavaScript.",
    "link": "https://iworldreg.iworldreg.com/"
  },
  "pvitlApp": {
    "imgOne": "img/pvitl-app-pop-2.png",
    "imgTwo": "img/pvitl-app-pop-1.png",
    "title": "Pvitl Application",
    "subtitle": "Pvitl Application Web App",
    "text": "This is the main web app for the Pvitl Application, which is a database platform that allows businesses and companies to manage large amount of data. It is usually used to organize large events such as NBA games, Oscars, Emmys, etc. I was the Front-End Developer for this project and I helped designed and structured how all of the different features would look. Some of the features I worked on were the dashboard, form builder, search page, database tables, and more. I did some backend work such as routing and storing data, but I mainly did tasks that dealt with the frontend. The application was written with AngularJS, Ruby, Ruby on Rails, JavaScript, jQuery, CSS, SASS, Foundation, and HTML. (In order to see the application you have to sign up and choose a payment plan)",
    "link": "https://iworldreg.iworldreg.com/"
  },
  "gymtrition": {
    "imgOne": "img/gym-popup-1.png",
    "imgTwo": "img/gym-popup-2.png",
    "title":"Gymtrition Website",
    "subtitle": "Group Project in Bootcamp",
    "text": "This was the first group project I had to do at the Rutgers Bootcamp in 2016. The idea my group and I had was to create a site that allows users to find the closest gym, create a workut routine, and find nutritional information of certain foods. My role was the Front-End Developer and I was assigned to deign and struture how the site will look. I created a parallax scrolling site tht shows an image before the content is shown. I also helped design the nutritional info and workout routine sections. The website was written with HTML, CSS, Materialize.CSS, Javascript, and jQuery.",
    "link": "https://gymtrition.herokuapp.com/"
  }
}

function popup(popupImgOne, popupImgTwo, popupTitle, popupSubtitle, popupText, popupLink){
  imgOne.src = popupImgOne;
  imgTwo.src = popupImgTwo;
  title.innerText = popupTitle;
  subtitle.innerText = popupSubtitle;
  text.innerText = popupText;
  link.href = popupLink;
}

document.querySelector("#pvitl-home").addEventListener("click", function(){
  popup(popupData.pvitlHome.imgOne, popupData.pvitlHome.imgTwo, popupData.pvitlHome.title, popupData.pvitlHome.subtitle, popupData.pvitlHome.text, popupData.pvitlHome.link);
});

document.querySelector("#pvitl-app").addEventListener("click", function(){
  popup(popupData.pvitlHome.imgOne, popupData.pvitlHome.imgTwo, popupData.pvitlApp.title, popupData.pvitlApp.subtitle, popupData.pvitlApp.text, popupData.pvitlApp.link);
});

document.querySelector("#gymtrition").addEventListener("click", function(){
  popup(popupData.gymtrition.imgOne, popupData.gymtrition.imgTwo, popupData.gymtrition.title, popupData.gymtrition.subtitle, popupData.gymtrition.text, popupData.gymtrition.link);
});

