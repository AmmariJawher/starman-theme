<template>
<div class="section">
  <div class="container">
    <h2 class="title has-text-dark is-4 has-text-weight-bold">Popular Professional Services</h2>
    <div class="columns has-text-centered has-text-weight-semibold">
      <div class="column" v-for="service in services" :key="service.id">
        <a href="">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media-content">
                <p class="subtitle is-6 has-text-weight-medium is-capitalized has-text-grey">{{ service.gov }} . {{ service.place}}</p>
                <p class="title is-5">{{ service.title }}</p>
                <p class="subtitle is-6">{{ service.price }}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TopHightlights',
  data () {
    return {
      services: [
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: '',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: '',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: '',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        },
        {
          title: 'Villa Samira · Contemporary Thai villa above the bay',
          img: '',
          price: '$1,250',
          gov: 'SOUSSE',
          place: 'hirgla'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
