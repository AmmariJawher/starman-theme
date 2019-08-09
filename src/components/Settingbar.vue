<template>
  <div class="has-background-white cst-border">
    <div class="container">
    </div>
  </div>
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
$dark-blue: #033090;
// Update Bulma's global variables
$primary: $dark-blue;

// Utilites/Controls
$control-height: 2.25em;

// Form/Shared
$input-radius: 0;

// Costume Classes
.has-padding {
  padding: 10px 55px;
  box-shadow: -4px -28px 5px 30px rgba(0, 0, 0, 0.09);
}
.cst-border {
  border-bottom: solid lightgray 1px;
}
.cst-none-border {
  border: none;
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
