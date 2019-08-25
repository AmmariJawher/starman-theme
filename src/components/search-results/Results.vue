<template>
  <div  class="grid">
    <Card :service="service" v-for="service in services" :key="service.id"/>
  </div>
</template>

<script>
import Card from '../shared/Card'

export default {
  name: 'Results',
  components: {
    Card
  },
  data () {
    return {
      services: [
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: 'https://bulma.io/images/placeholders/1280x960.png',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
