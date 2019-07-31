let headerNav = document.getElementById("header-nav")

function navbar() {
  const nav = document.createElement("nav")
  const navContent = `
  <div class="logo">
  <a href="/">
  <img src="img/zzz-white.png" alt="logo" />
  <h1>Sleep Tracker</h1>
  </a>
  </div>
  <div class="nav-items">
  <a href="what_is_sleep_tracker.html">What is Sleep Tracker?</a>
  <a href="why-sleep.html">Why Sleep?</a>
  <a href="who-are-we.html">Who are we?</a>
  </div>
  <div class="login">
  <button>
  <a href="https://app-sleeptracker-july.netlify.com/">Sign Up</a>
  </button>
  <button>
  <a href="https://app-sleeptracker-july.netlify.com/">Log In</a>
  </button>
  </div>
  `
  nav.innerHTML = navContent
  return nav 
}

function mobileNavbar() {
  const nav = document.createElement("nav")
  const navContent = `
  <div class="logo">
  <a href="/">
  <img src="img/zzz-white.png" alt="logo" />
  <h1>Sleep Tracker</h1>
  </a>
  </div>
  <div id="menuToggle">

  <input type="checkbox" />
  
  <span></span>
  <span></span>
  <span></span>
  
  <ul id="menu">
    <a href="#"><li>Home</li></a>
    <a href="#"><li>About</li></a>
    <a href="#"><li>Info</li></a>
    <a href="#"><li>Contact</li></a>
    <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
  </ul>
</div>
  `
  nav.innerHTML = navContent
  return nav 
}

const checkWidth = () => {
  if (window.innerWidth > 800) {
    if (headerNav == null){
      headerNav.appendChild(navbar())
    } else {
      header
    }
  } else {
    headerNav.appendChild(mobileNavbar())
  }
}


window.addEventListener("resize", checkWidth);