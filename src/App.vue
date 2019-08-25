<template>
  <div id="app has-navbar-fixed-top">
    <SearchResults/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import SearchResults from './components/SearchResults'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    SearchResults,
    Footer
  }
}
</script>

<style lang="scss">
@charset "utf-8";

// Import a Google Font
@import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:900&display=swap');

// Set your brand colors
$sky-blue: #167dff;
$sky-line: linear-gradient(90deg, rgba(0,67,144,1) 0%, rgba(3,48,144,1) 100%);
// Update Bulma's global variables
$primary: $sky-blue;
$widescreen-enabled: trye;
$fullhd-enabled: false;
$border: white;
$family-sans-serif: 'Oxygen', sans-serif;
$family-primary: 'Oxygen', sans-serif;
$family-secondary: 'Roboto', sans-serif;

// Utilites/Controls
$control-height: 3.5em;

// Form/Shared
$input-radius: 0;

// Update some of Bulma's component variables
$control-border-width: 1px;
$input-border-color: transparent;
$input-shadow: none;

// Classes
.hero-body {
  padding-bottom: 10rem !important;
  padding-top: 10rem !important;
  font-family: 'Muli', sans-serif;
}

// Costume Classes
.stand-height {
  height: 2.25em !important;
}
.button-wide {
  padding-left: 50px !important;
  padding-right: 50px !important;
  font-weight: 500 !important;
}
.cst-padding {
  padding-top: 10px;
}
.round {
  border-radius: 25px !important;
}
// Import only what you need from Bulma
@import "../node_modules/bulma/sass/utilities/_all.sass";
@import "../node_modules/bulma/sass/base/_all.sass";
@import "../node_modules/bulma/sass/elements/button.sass";
@import "../node_modules/bulma/sass/elements/container.sass";
@import "../node_modules/bulma/sass/elements/title.sass";
@import "../node_modules/bulma/sass/form/_all.sass";
@import "../node_modules/bulma/sass/components/navbar.sass";
@import "../node_modules/bulma/sass/layout/hero.sass";
@import "../node_modules/bulma/sass/layout/section.sass";

#app {
}
</style>
