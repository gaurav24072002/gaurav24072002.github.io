/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Election System",
    cardImage: "assets/images/project-page/election.jpg",
    description:
      "An Eletion System app built using C-Programming For my College CR Election.",
    tag:
      "C",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/Election-System-project",
  },
  {
    title: "Pizza Store APP",
    cardImage: "assets/images/project-page/Pizza.png",
    description:
      "A Pizza Booking App built using MERN Stack.",
    tag:
      "MERN Stack",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/Pizza-Ordering-App",
  },
  {
    title: "Store-Department-App",
    cardImage: "assets/images/project-page/store.jpg",
    description:
      "A T-Shirt,Shirt,Shoes etc. Booking Form buit using PHP For Store Department of Moyo College",
    tag:
      "PHP",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/Store-Department-App",
  },
  {
    title: "Form_Wave_Animation",
    cardImage: "assets/images/project-page/Form_wave_animation.PNG",
    description:
      "A Form Wave Animation App Built using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Form_Wave_Animation",
  },
  {
    title: "Blurry Loading",
    cardImage: "assets/images/project-page/code2.jpg",
    description:
      "A Blurry Loading Built using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Blurry%20Loading",
  },
  {
    title: "Drawing App",
    cardImage: "assets/images/project-page/code1.jpg",
    description:
      "A Drawing App Built using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Drawing%20App",
  },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tag:
      "React.js",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "3D-Crousel",
    cardImage: "assets/images/project-page/code1.jpg",
    description:
      "A 3D-Crousel Built using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/3d-carousel",
  },
  {
    title: "EventKeyCode",
    cardImage: "assets/images/project-page/code2.jpg",
    description:
      "A EventKeyCode Built using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/EventKeyCode",
  },
  {
    title: "Random Jokes",
    cardImage: "assets/images/project-page/Random_jokes.PNG",
    description:
      "A Random Jokes using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Random%20Jokes",
  },
  {
    title: "Auto-Text Effect",
    cardImage: "assets/images/project-page/Auto-text.PNG",
    description:
      "Auto Text Effect using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Auto%20Text%20Effect",
  },
  {
    title: "Calculator",
    cardImage: "assets/images/project-page/calculator.PNG",
    description:
      "Calculator using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/calculator",
  },
  {
    title: "Progress Step",
    cardImage: "assets/images/project-page/progress.PNG",
    description:
      "Progress Steps using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Progress%20Steps",
  },
  {
    title: "Rotating Navigation",
    cardImage: "assets/images/project-page/Rotating_Navigation.PNG",
    description:
      "Rotating Navigation using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Rotating%20Navigation",
  },
  {
    title: "Notes App",
    cardImage: "assets/images/project-page/notes.PNG",
    description:
      "Notes App using HTML, CSS , JavaScript",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Notes%20App",
  },
  {
    title: "Movie App",
    cardImage: "assets/images/project-page/Movie-app.PNG",
    description:
      "Movie App using HTML, CSS , JavaScript",
    tag:
      "JavaScript API",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Movie%20App",
  },
  {
    title: "Search Widget",
    cardImage: "assets/images/project-page/Search.PNG",
    description:
      "Movie App using HTML, CSS , JavaScript",
    tag:
      "JavaScript API",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Hidden%20Search%20Widget",
  },
  {
    title: "Event Key Code",
    cardImage: "assets/images/project-page/Key_Code.PNG",
    description:
      "Movie App using HTML, CSS , JavaScript",
    tag:
      "JavaScript API",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/EventKeyCode",
  },
  {
    title: "Blurry Loading Interface",
    cardImage: "assets/images/project-page/Blurry_Loading.PNG",
    description:
      "Movie App using HTML, CSS , JavaScript",
    tag:
      "JavaScript API",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Blurry%20Loading",
  },
  {
    title: "Scroll Animation",
    cardImage: "assets/images/project-page/Scroll_Animation.PNG",
    description:
      "Movie App using HTML, CSS , JavaScript",
    tag:
      "JavaScript API",
    Previewlink: "",
    Githublink: "https://github.com/gaurav24072002/JavaScript-Projects/tree/master/Scroll%20Animation",
  },
  
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tag, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <div class="searchdiv"><button class="tagbutton">${tag}</button></div>
            <ul class="menu-content"><br>
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card;
  input = document.getElementById('myInput').value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName('skill-card')
  card = document.getElementsByClassName('card')
  button = document.getElementsByClassName('tagbutton');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (button[i].innerHTML.toUpperCase().includes(input)) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}