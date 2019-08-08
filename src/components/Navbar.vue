<template>
    <nav class="navbar has-background-white is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item has-text-primary">
              Become a Seller
            </a>
            <LoginModal/>
            <SignupModal/>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'

export default {
  name: 'Hero',
  components: {
    LoginModal,
    SignupModal
  },
  data () {
  }
}
</script>

<style lang="scss" scoped>
// Set your brand colors
$dark-blue: #033090;
// Update Bulma's global variables
$primary: $dark-blue;

// Utilites/Controls
$control-height: 2.5em;

// Form/Shared
$input-radius: 0;

// Costume Classes
.has-padding {
  padding: 10px 55px;
  box-shadow: -4px -28px 5px 30px rgba(0,0,0,0.09);
};

// Import only what you need from Bulma
@import "../../node_modules/bulma/sass/utilities/_all.sass";
@import "../../node_modules/bulma/sass/base/_all.sass";
@import "../../node_modules/bulma/sass/elements/button.sass";
@import "../../node_modules/bulma/sass/elements/container.sass";
@import "../../node_modules/bulma/sass/elements/title.sass";
@import "../../node_modules/bulma/sass/form/_all.sass";
@import "../../node_modules/bulma/sass/components/navbar.sass";
@import "../../node_modules/bulma/sass/layout/hero.sass";
@import "../../node_modules/bulma/sass/layout/section.sass";
</style>
