<template>
  <div id="main">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
:root {
    --body-font: 'Open Sans', sans-serif;
    --primary-color: rgba(89, 12, 18, 1);
    --secondary-color: rgba(140, 80, 58, 1); 
    --tertiary-color: rgba(191, 125, 101, 1); 
    --light-color: rgba(216, 167, 138, 0.1); 
    --dark-color: rgba(38, 0, 0, 1); 
}

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-family: var(--body-font);
}
</style>
