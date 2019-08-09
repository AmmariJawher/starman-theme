<template>
    <div class="">
      <GmapMap class="cst-fixed"
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="roadmap"
        style="width: 33%; height: 85%"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap>
    </div>
</template>

<script>
export default {
  name: 'Explore',
  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },
  mounted () {
    this.geolocate()
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace (place) {
      this.currentPlace = place
    },
    /*
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    */
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .cst-fixed {
    position: fixed;
    bottom: 0;
    right: 0;
  }
  #map {
          height: 100%;  /* The height is 400 pixels */
          width: 40%;  /* The width is the width of the web page */
        }
</style>
