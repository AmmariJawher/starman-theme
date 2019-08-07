<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter is-paddingless is-radiusless">
        <Categories/>
      </div>
      <div class="column">
        <h2 class="title has-text-dark is-4 has-text-weight-medium">Search Results</h2>
        <Results/>
        <Results/>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from './search-results/Categories'
import Results from './search-results/Results'

export default {
  name: 'SearchResults',
  components: {
    Categories,
    Results
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
