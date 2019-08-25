<template>
<section>
    <Navbar/>
    <SettingBar/>
    <div class="container is-fluid has-background">
      <div class="columns">
        <div class="column is-two-thirds is-paddingless is-radiusless">
          <h2 class="title has-text-dark is-4 has-text-weight-medium">Search Results</h2>
          <Results/>
          <Results/>
          <Pagination/>
        </div>
        <div class="column cst-position">
          <Map/>
        </div>
      </div>
    </div>
</section>
</template>

<script>
import Settingbar from './search-results/Settingbar'
// import Categories from './search-results/Categories'
import Results from './search-results/Results'
import Pagination from './search-results/Pagination'
import Map from './search-results/Map'
import Navbar from './Navbar'

export default {
  name: 'SearchResults',
  components: {
    Settingbar,
    Results,
    Pagination,
    Map,
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.map-container {
  height: 80vh;
}
.cst-position {
  position: absolute;
}
.container {
  padding-top: 30px;
  padding-bottom: 20px;
}
.is-fixed {
  position: fixed;
  top: 0;
}
</style>
