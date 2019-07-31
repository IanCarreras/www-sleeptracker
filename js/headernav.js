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
<div id="menu">
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
</div>
<div id="menuToggle">
  <input type="checkbox" />
  <span></span>
  <span></span>
  <span></span>
  <div class="mobile-menu">
    <div class="nav-items">
        <a href="what_is_sleep_tracker.html">What is Sleep Tracker?</a>
        <a href="why-sleep.html">Why Sleep?</a>
        <a href="who-are-we.html">Who are we?</a>
    </div>
    <div class="login">
        <button>
            <a href="https://app-sleeptracker-july.netlify.com/signup">Sign Up</a>
        </button>
        <button>
            <a href="https://app-sleeptracker-july.netlify.com/login">Log In</a>
        </button>
    </div>
  </div>
</div>
  `
  nav.innerHTML = navContent
  return nav
}

const checkWidth = () => {
  if (window.innerWidth > 800) {
      console.log('desktop')
      document.getElementById('menu').style.display = "flex"
      document.getElementById('menuToggle').style.display = "none"
    } else {
      document.getElementById('menu').style.display = "none"
      document.getElementById('menuToggle').style.display = "block"
    }
}

headerNav.appendChild(navbar())
window.addEventListener("resize", checkWidth);