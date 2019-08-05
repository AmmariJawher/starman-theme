<template>
<div class="background-colored section">
  <div class="container">
    <div class="columns has-text-centered has-text-weight-semibold">
      <div class="column" :key="link.id" v-for="link in links">
        <a href="" class="has-text-white is-capitalized">{{ link.title }}</a>
      </div>
    </div>
    <p class="has-text-centered has-text-white">© 2019 Web Media Service MWS</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      links: [
        {title: 'SUPPORT'},
        {title: 'CAREER'},
        {title: 'CONTACT US'},
        {title: 'ABOUT MWS'}

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.background-colored {
  background: #033090;
}
</style>
