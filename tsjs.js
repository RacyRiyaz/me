/* ----- NAVIGATION BAR FUNCTION ----- */

function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = " 0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "7rem";
    navHeader.style.lineHeight = "7rem";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "9rem";
    navHeader.style.lineHeight = "9rem";
  }
}

/* ----- TYPING EFFECT ----- */

var typingEffect = new Typed(".typedText", {
  strings: ["a Coder", "a Developer", "a Data Analyst"],
  loop: true,
  typeSpeed: 120,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", {delay: 100});
sr.reveal(".featured-text-info", {delay: 200});
sr.reveal(".featured-text-btn", {delay: 200});
sr.reveal(".social_icons", {delay: 200});
sr.reveal(".featured-image", {delay: 300});

/* -- PROJECT BOX -- */
sr.reveal(".project-box", {interval: 200});
/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});
srLeft.reveal(".project-info", {delay: 100});
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", {delay: 100});
srRight.reveal(".form-control", {delay: 100});
srRight.reveal(".project-image", {delay: 100});

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 150,
      sectionId = current.getAttribute("id");
    // console.log(scrollY);
    // console.log(sectionTop);
    // console.log(sectionHeight);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
