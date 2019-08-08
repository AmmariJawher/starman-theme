<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-quarters is-paddingless is-radiusless">
        <h2 class="title has-text-dark is-4 has-text-weight-medium">Search Results</h2>
        <Results/>
        <Results/>
        <Pagination/>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
</template>

<script>
import Categories from './search-results/Categories'
import Results from './search-results/Results'
import Pagination from './search-results/pagination'

export default {
  name: 'SearchResults',
  components: {
    Categories,
    Results,
    Pagination
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
