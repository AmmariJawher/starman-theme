<template>
<div class="section">
  <div class="container">
    <h2 class="title has-text-dark is-4 has-text-weight-bold">Recommended For You</h2>
    <div class="columns has-text-centered has-text-weight-semibold">
      <div class="column" v-for="service in services" :key="service.id">
        <a href="">
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by4">
                <img src="https://bulma.io/images/placeholders/480x640.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media-content">
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
  name: 'PopularServices',
  data () {
    return {
      services: [
        {
          title: 'Tire replacement',
          img: '',
          price: 'Car Mecanic'
        },
        {
          title: 'Diagnostics',
          img: '',
          price: 'Car Mecanic'
        },
        {
          title: 'Diagnostics',
          img: '',
          price: 'Car Mecanic'
        },
        {
          title: 'Diagnostics',
          img: '',
          price: 'Car Mecanic'
        },
        {
          title: 'Diagnostics',
          img: '',
          price: 'Car Mecanic'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
