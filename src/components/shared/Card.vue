<template>
<div class="card is-shadowless has-border">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="service.img" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media-content">
      <p class="subtitle is-size-7 has-text-weight-bold is-capitalized has-text-grey">
        {{ service.gov }} . {{ service.place}}</p>
      <p class="title is-size-5 has-text-black-ter has-text-weight-bold">{{ service.title }}</p>
      <p class="subtitle is-6 has-text-right">{{ service.price }}</p>
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
.has-border {
  border: 1px solid #cccbcb !important;
}
</style>
