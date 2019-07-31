let headerNav = document.getElementById("header-nav")

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
headerNav.appendChild(nav)