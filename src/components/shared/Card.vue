<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="service.img" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media-content">
      <p class="subtitle is-6 has-text-weight-medium is-capitalized has-text-grey">
        {{ service.gov }} . {{ service.place}}</p>
      <p class="title is-5">{{ service.title }}</p>
      <p class="subtitle is-6">{{ service.price }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
    }
  },
  props: ['service']
}
</script>

<style lang="scss" scoped>

</style>
