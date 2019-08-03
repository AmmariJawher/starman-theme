<template>
  <div id="app">
    <Hero/>
    <ClientsList/>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Hero from './components/Hero'
import ClientsList from './components/ClientsList'

export default {
  name: 'App',
  components: {
    Hero,
    ClientsList,
    HelloWorld
  }
}
</script>

<style lang="scss">
@charset "utf-8";

// Import a Google Font
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

// Set your brand colors
$purple: #033090;
$pink: #033090;
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

// Update Bulma's global variables
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$link: $pink;
$widescreen-enabled: trye;
$fullhd-enabled: false;
$border: white;
$box-shadow: 0 16px 40px rgba(0,0,0,0.25) !default;

// Update some of Bulma's component variables
$body-background-color: $beige-lighter;
$control-border-width: 1px;
$input-border-color: transparent;
$input-shadow: none;

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
