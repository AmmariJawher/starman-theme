<template>
    <div class="">
      <GmapMap class="cst-fixed"
        :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      }"
        :center= center
        :zoom="9"
        :styles= styles
        map-type-id="roadmap"
        style="width: 33%; height: 85%"
      >
        <div v-for="marker in markers" :key="marker.id">
          <gmap-custom-marker :marker="marker.position">
            <div class="map-marker">
              <span> {{ marker.price }} </span>
            </div>
            <MapMarkerCrad v-if="false" style="animationtransition-delay: 3s"/>
          </gmap-custom-marker>
        </div>
      </GmapMap>
    </div>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'
import MapMarkerCrad from './MapMarkerCard'
import MapMarker from './MapMarker'

export default {
  name: 'Explore',
  components: {
    GmapCustomMarker,
    MapMarkerCrad,
    MapMarker
  },
  data () {
    return {
      center: { lat: 35, lng: 10.6 },
      markers: [
        {
          position: {
            lat: 35,
            lng: 10.6
          },
          price: '150DT'
        },
        {
          position: {
            lat: 35.3,
            lng: 10.6
          },
          price: '60DT'
        },
        {
          position: {
            lat: 35.2,
            lng: 10.5
          },
          price: '75DT'
        },
        {
          position: {
            lat: 35.2,
            lng: 10.2
          },
          price: '88DT'
        }
      ],
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
  .map-marker {
    background: #ffffff;
    border: solid grey 1px;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
    transition-duration: 0.2s
  }
  .map-marker:hover {
    color: #167dff;
    border-color: #167dff;
    font-size: 16px;
    padding: auto;
    transition-duration: 0.2s;
  }
</style>
