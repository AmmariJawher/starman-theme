<template>
  <section class="hero is-medium is-bold bg-img">
    <div class="hero-head">
      <!-- Use it for later -->
    </div>
    <div class="hero-body" id="hero-body-pad">
      <div class="container">
        <h1 class="title has-text-white is-2 has-text-weight-bold">Find The Perfect Services for you.</h1>
        <div class="is-radiusless">
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
      <!-- Location Changer -->
    </div>
  </section>
</template>

<script>
import LoginModal from '../LoginModal'
import SignupModal from '../SignupModal'

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

// Costume Classes
.bg-img {
  background-image: url("../../assets/img/home_mechanic3_slider_bg.jpg") ;
  background-position: top center;
  background-repeat:  no-repeat;
  //background-attachment: fixed;
  background-size:  cover;
  background-color: #999;
};
</style>
