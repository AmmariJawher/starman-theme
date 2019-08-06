<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-3">
        <div class="tile is-child box is-roundless is-boardless">
          <Categories/>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child">
            <Results/>
        </article>
        <br/>
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
