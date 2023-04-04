<template>
  <nav>
    <img
      class="logo"
      alt="DZT Surveying Logo"
      src="./assets/dzt_logo_final.png"
    />
    <div class="nav-link-container">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <div class="color-bar"></div>
  <router-view />
  <footer>
    <div class="address">
      <p class="footer-bold">DZT Land Surveying, PLLC</p>
      <p>7500 NC Hwy 15/501 Suite 5</p>
      <p>West End, NC 27376</p>
    </div>
    <div class="contact-info">
      <p><span class="footer-bold">Phone:</span>910-420-1325</p>
      <p><span class="footer-bold">NC Firm:</span>P-2686</p>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
  padding-bottom: 1%;
  background-color: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #00008b;
}

.logo {
  width: 40%;
}

.nav-link-container {
  align-items: flex-end;
}

.color-bar {
  padding: 0.75%;
  /* background-color: blue; */
  background-image: linear-gradient(to right, #00008b, #43a6e6, #00008b);
}

footer {
  margin-top: auto;
  background-color: #eaeaea;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footer-bold {
  font-weight: bold;
  margin-right: 0.3rem;
}
</style>
