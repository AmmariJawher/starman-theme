<template>
  <nav class="navbar has-background-white add-padding is-fixed-top bottom-border">
    <div class="container is-fluid">
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
        <div class="navbar-start">
          <div class="navbar-item navbar-search is-paddingless">
            <div class="field fieldsearch">
              <form action="" id="search-form">
                <div class="field">
                  <p class="control is-dark has-icons-right">
                    <input type="//search" name="q" maxlength="500" value="" id="search" class="input has-text-weight-bold"
                      placeholder="Search" required="required">
                      <span class="icon is-small is-right">
                        <font-awesome-icon icon="search" />
                      </span>
                  </p>
                </div>
              </form>
              <div class="search-suggest" style="position:relative"></div>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item has-text-weight-bold">
            Become a Seller
          </a>
          <LoginModal />
          <SignupModal />
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
  data () {}
}

</script>

<style lang="scss" scoped>
// Set your brand colors
$dark-blue: #167dff;
// Update Bulma's global variables
$primary: $dark-blue;

// Utilites/Controls
$control-height: 2.25em;
//$input-border-color: transparent;
$input-shadow: none;

// Form/Shared
$input-radius: 0;

// Costume Classes
.add-padding {
  padding-top: 5px;
  padding-bottom: 5px;
}
.bottom-border {
  border: none;
  border-bottom: 1px solid #cccbcb;
}

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
