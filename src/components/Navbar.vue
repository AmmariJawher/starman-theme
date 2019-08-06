<template>
  <section class="">
    <nav class="navbar is-primary">
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
            <span class="navbar-item">
              <a class="button is-primary is-inverted stand-height is-radiusless">
                <span>LOG IN</span>
              </a>
            </span>
            <span class="navbar-item">
              <a class="button is-primary is-inverted stand-height is-radiusless">
                <span>SIGN UP</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
    <div class="bg-color-primary">
        <div class="media-content">
          <div class="field-body">
            <div class="field">
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
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select name="country">
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
                <p class="control">
                  <a class="button is-primary is-inverted is-radiusless button-wide">SEARCH</a>
                </p>
              </div>
            </div>
          </div>
      </div>
      <div>

      </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
  }
}
</script>

<style lang="scss" scoped>
// Utilites/Controls
$control-height: 2.5em;

// Costume Classes
.bg-color-primary {
  background: #033090;
  padding: 10px 55px;
};
.bg-color-secondary {
  background: #033090;
  padding: 10px 55px;
};

// Import only what you need from Bulma
@import "../../node_modules/bulma/sass/utilities/_all.sass";
</style>
