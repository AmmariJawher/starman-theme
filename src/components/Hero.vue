<template>
  <section class="hero is-medium is-bold bg-img">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <span class="navbar-item">
                <a class="button is-primary is-inverted is-radiusless">
                  <span>LOG IN</span>
                </a>
              </span>
              <span class="navbar-item">
                <a class="button is-primary is-radiusless">
                  <span>SIGN UP</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body" id="hero-body-pad">
      <div class="container">
        <h1 class="title has-text-white is-2 has-text-weight-bold">Find The Perfect Services for you.</h1>
        <div class="box is-radiusless">
           <div class="media-content">
              <div class="field-body">
                <div class="field is-marginless">
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
                </div>
                <div class="field is-grouped">
                  <div class="control is-expanded is-marginless">
                    <div class="select is-fullwidth is-disabled">
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
                        <a class="button is-primary is-radiusless" id="button-wide">SEARCH</a>
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
export default {
  name: 'Hero',
  data () {
  }
}
</script>

<style lang="scss" scoped>
#button-wide {
  padding-left: 50px;
  padding-right: 50px;
  font-weight: 500;
}

.bg-img {
  background-image: url("../assets/img/hero-bg-img.jpg") ;
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: #999;
};
</style>
