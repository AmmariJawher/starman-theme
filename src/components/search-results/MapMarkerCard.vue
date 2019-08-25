<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-2by1">
      <img src="https://bulma.io/images/placeholders/256x256.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MarkerMapCard',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.map-card {
  background: #ffffff;
  width: 50px;
  height: 50px;
}

.card {
  height: auto;
  width: 250px;
}
</style>
