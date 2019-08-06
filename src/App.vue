<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
    <Navbar/>
    <TopHightlights/>
    <Explore/>
    <PopularServices/>
    <Join/>
    <Footer/>
  </div>
</template>

<script>
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TopHightlights from './components/TopHightlights'
import Explore from './components/Explore'
import PopularServices from './components/PopularServices'
import Join from './components/Join'
import ClientsList from './components/ClientsList'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Hero,
    Navbar,
    TopHightlights,
    Explore,
    PopularServices,
    Join,
    ClientsList,
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
  padding-bottom: 9rem;
  padding-top: 5rem !important;
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
