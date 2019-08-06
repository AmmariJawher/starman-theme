<template>
  <div id="home">
    <TopHightlights/>
    <Explore/>
    <PopularServices/>
    <Join/>
  </div>
</template>

<script>
import Hero from './home/Hero'
import TopHightlights from './home/TopHightlights'
import Explore from './home/Explore'
import PopularServices from './home/PopularServices'
import Join from './home/Join'

export default {
  name: 'Home',
  components: {
    Hero,
    TopHightlights,
    Explore,
    PopularServices,
    Join
  }
}
</script>

<style lang="scss" scoped>

</style>
