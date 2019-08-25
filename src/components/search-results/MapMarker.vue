<template>
<gmap-custom-marker :marker="marker" :alignment="top">
  <div class="map-marker">
    <span> price </span>
  </div>
  <MapMarkerCrad v-if="false" style="animationtransition-delay: 3s"/>
</gmap-custom-marker>
</template>

<script>
export default {
  name: 'MapMarker',
  data () {
    return {
    }
  },
  props: ['service']
}
</script>

<style lang="scss" scoped>
.has-border {
  border: 1px solid #cccbcb !important;
}
</style>
