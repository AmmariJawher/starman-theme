<template>
<nav class="panel">
  <div class="panel-heading is-radiusless">
    <p class="has-text-weight-medium is-size-5 cst-margin-bottom"><font-awesome-icon icon="map-marker-alt"/>  Change Location </p>
    <div class="field-body">
      <div class="field">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select name="country cst-height">
              <option value="Argentina">Tunis</option>
              <option value="Bolivia">Sousse</option>
              <option value="Brazil">Sfax</option>
              <option value="Chile">Kairouan</option>
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
    </div>
  </div>
  <p class="is-size-5 panel-block cst-padding has-text-weight-medium">
    Categories
  </p>
  <a class="panel-block is-active">
    <span class="panel-icon">
        <font-awesome-icon icon="plug"/>
    </span>
    Electrician
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <font-awesome-icon icon="toolbox"/>
    </span>
    Technician
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <font-awesome-icon icon="cog"/>
    </span>
    Mechanic
  </a>
</nav>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Utilites/Controls
$control-height: 2.5em;

// Custome Classes
.cst-margin-bottom {
  margin-bottom: 10px;
}
.cst-padding {
  padding: 10px
}

// Import only what you need from Bulma
@import "../../../node_modules/bulma/sass/utilities/_all.sass";
@import "../../../node_modules/bulma/sass/base/_all.sass";
@import "../../../node_modules/bulma/sass/elements/button.sass";
@import "../../../node_modules/bulma/sass/elements/container.sass";
@import "../../../node_modules/bulma/sass/elements/title.sass";
@import "../../../node_modules/bulma/sass/form/_all.sass";
</style>
