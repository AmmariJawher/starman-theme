<template>
  <div id="app has-navbar-fixed-top">
    <Navbar/>
    <div class="cst-padding"></div>
    <SearchResults/>
    <Footer/>
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
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

// Set your brand colors
$dark-blue: #033090;
// Update Bulma's global variables
$primary: $dark-blue;
$widescreen-enabled: trye;
$fullhd-enabled: false;
$border: white;

// Utilites/Controls
$control-height: 3.5em;

// Form/Shared
$input-radius: 0;

// Update some of Bulma's component variables
$control-border-width: 1px;
$input-border-color: transparent;
$input-border-color: transparent;
$input-shadow: none;

// Classes
.hero-body {
  padding-bottom: 12rem !important;
  padding-top: 10rem !important;
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
