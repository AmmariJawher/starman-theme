<template>
  <div id="home">
    <Navbar/>
    <Hero/>
    <TopHightlights/>
    <Explore/>
    <PopularServices/>
    <Join/>
  </div>
</template>

<script>
import Hero from './home/Hero'
import Navbar from './Navbar'
import TopHightlights from './home/TopHightlights'
import Explore from './home/Explore'
import PopularServices from './home/PopularServices'
import Join from './home/Join'

export default {
  name: 'Home',
  components: {
    Hero,
    Navbar,
    TopHightlights,
    Explore,
    PopularServices,
    Join
  }
}
</script>

<style lang="scss" scoped>

</style>
