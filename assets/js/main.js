//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`
<nav class="fixed-top black">
<div class="nav-wrapper">
    <a href="index.html" class="brand-logo" style = "height: 13px; border-radius: 5px;" ><img src="assets/images/logo.PNG"></a>
    <a href="index.html" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>
        <li><a class="white-text" href="education.html">Education</a></li>
        <li><a class="white-text" href="skill.html">Skills</a></li>
        <li><a class="white-text" href="404.html">Blog</a></li>
        <li><a class="white-text" href="https://drive.google.com/file/d/1dAZPFP4b9XnweWJifLZCkK93BHJx7xua/view?usp=sharing" target="_blank">My Resume</a></li>
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
          <label for="switch-1" class="theme-switch">
            <input class="toggle-checkbox" type="checkbox" id="switch-1" name="theme" />
            <div class='toggle-slot'>
              <div class='sun-icon-wrapper'>
                <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
              </div>
              <div class='toggle-button-1 toggle-button'></div>
              <div class='moon-icon-wrapper'>
                <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
              </div>
            </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="research.html">Research</a></li>
<li><a href="education.html">Education</a></li>
<li><a href="skill.html">Skills</a></li>
<li><a href="index.html">Blog</a></li>
<li><a href="https://docs.google.com/document/d/1-SX2Pz1rD9D1IS-r5PpCCb1JeihSM_BtnI5Y9uruQGc/edit?usp=sharing" target="_blank">My Resume</a></li>


<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch-2" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch-2" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button-2 toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="footer-left">
  <div class="footer-img">
    <img src="assets/images/logo2.PNG" alt="User img" style="width:60px;">
  </div>
  <div class="footer-text">
    <p style="color:#cccccc">"You Should Know Something Abou Everything And Everything About Something !!"</p>
  </div>
  
</div>
<div class="footer-right">
  <h6 style="color:#fff;">Get in Touch</h6>
  <form>
    <div class="name">
      <input type="text" name="name" placeholder="Enter Name" required>
    </div>
    <div class="email">
      <input type="email" name="email" placeholder="Enter Email" required>
    </div>
    <div class="msg">
      <textarea type="text" name="msg" placeholder="Message" style="height:120px;"  required></textarea>
    </div>
    <button type="submit" style="height: 47px;
    width: 170px;border: 2px solid black;
    background: #00FECA;
    color: black;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;" >Send</button>
  </form>
</div>

<!-- <div class="tt-copy">
  <div class="container col-sm-6">
   <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>
  </div>
</div> -->

</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

// selecting toggler dynamically as their are two separate code sections for the toggler to support both mobile screen and desktop screens
if(window.innerWidth <= 992) {
  var checkbox = document.querySelector("#switch-2");
  var toggler = document.querySelector('.toggle-button-2');
} else {
  var checkbox = document.querySelector("#switch-1");
  var toggler = document.querySelector('.toggle-button-1');
}

if (checkbox) {
  let a = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", a); // setting the initial theme to light

  if (localStorage.getItem("theme") === "dark") {
    checkbox.checked = true;
  }

  // selecting the footer text & footer icons
  const footerText = document.querySelector('.footer-text p');
  const footerIcons = document.querySelectorAll('.sub-footer-icon');
  const emailIcon = document.querySelector('.email-icon');

  // listening for click on toggler
  toggler.addEventListener("click", () => {
    if (checkbox.checked) {
      // if theme is dark then on the toggler click we have to make it light
      trans();
      // changing the color
      toggleDarkColor();

      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else { 
      /*
      if there is click on toggler and if theme is light (initially it will be light) then the theme should convert to dark
      */
      trans();
      // changing the color
      toggleLightColor();

      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  // function for changing color when dark theme is on.
  let toggleDarkColor = () => {
    footerText.style.color = '#fff';
    emailIcon.style.color = '#fff';

    footerIcons.forEach(icon => {
        icon.style.backgroundColor = '#fff';
        icon.style.border = '1px solid #fff';

        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = '#4d4d4d';
          icon.style.border = '1px solid #4d4d4d';
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = '#fff';
          icon.style.border = '1px solid #fff';
        });
    });
  }

  // function for changing color when the light theme is on.
  let toggleLightColor = () => {
    footerText.style.color = '#cccccc';
    emailIcon.style.color = '#cccccc';

    footerIcons.forEach(icon => {
        icon.style.backgroundColor = '#cccccc';
        icon.style.border = '1px solid #cccccc';
        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = '#000';
          icon.style.border = '1px solid #000';
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = '#cccccc';
          icon.style.border = '1px solid #cccccc';
        });
    });
  } 
}