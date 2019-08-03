<template>
  <div id="app">
    <Hero/>
    <ClientsList/>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Hero from './components/Hero'
import ClientsList from './components/ClientsList'

export default {
  name: 'App',
  components: {
    Hero,
    ClientsList,
    HelloWorld
  }
}
</script>

<style>
#app {
}
</style>
