<template>
<div class="section">
  <div class="container">
    <h2 class="title has-text-dark is-4 has-text-weight-bold">Explore new Services in Your City</h2>
    <div class="box">
      <!--The div element for the map -->
      <div id="map"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Explore',
  data () {
    return {
    }
  },
  mounted: {
    mounted () {
      this.initMap()
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #map {
          height: 400px;  /* The height is 400 pixels */
          width: 100%;  /* The width is the width of the web page */
        }
</style>
