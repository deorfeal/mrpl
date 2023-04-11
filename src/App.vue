<script>

export default {
  data() {
    return {

    }
  }
}

</script>

<template>
  <router-view />
</template>

<style lang="scss">

// reset

* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

button {
  background: unset;
}

// // 
html,
body {
  font-family: 'Outfit', sans-serif;
  background: #F6F8FA;
}

body {
}

#app {
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.main {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.big-wrapper {
  padding: 20px;
  max-width: 1400px;
  width: 100%;
}

</style>