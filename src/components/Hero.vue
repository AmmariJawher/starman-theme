<template>
  <section class="hero is-medium is-bold bg-img">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
            </a>
            <!--
            Search bar: Font-awsome icon won't show up.
            <span class="navbar-item">
              <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-small is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </span>
            -->
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <LoginModal/>
              <SignupModal/>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body" id="hero-body-pad">
      <div class="container">
        <h1 class="title has-text-white is-2 has-text-weight-bold">Find The Perfect Services for you.</h1>
        <div class="bo is-radiusless">
           <div class="media-content">
              <div class="field-body">
                <div class="field is-marginless">
                  <div class="control is-expanded">
                    <div class="select is-fullwidth">
                      <select name="country cst-height">
                        <option value="Argentina">Argentina</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Venezuela">Venezuela</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field is-grouped">
                  <div class="control is-expanded is-marginless">
                    <div class="select is-fullwidth">
                      <select name="country">
                        <option value="Argentina"><span id="option">Argentina</span></option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Venezuela">Venezuela</option>
                      </select>
                    </div>
                  </div>
                      <p class="control">
                        <a class="button is-primary is-radiusless button-wide">SEARCH</a>
                      </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
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
// Forms/Select
#option {
  margin: 3rem 3rem !important;
  padding: 3rem 3rem !important;
}

// Costume Classes
.bg-img {
  background-image: url("../assets/img/home_mechanic3_slider_bg.jpg") ;
  background-position: bottom center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: #999;
};
</style>
