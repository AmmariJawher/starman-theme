<template>
<nav class="pagination is-centered" role="navigation" aria-label="pagination">
  <a class="pagination-previous is-radiusless">Previous</a>
  <a class="pagination-next is-radiusless">Next page</a>
  <ul class="pagination-list">
    <li><a class="pagination-link is-radiusless" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link is-radiusless" aria-label="Goto page 45">45</a></li>
    <li><a class="pagination-link is-current is-radiusless" aria-label="Page 46" aria-current="page">46</a></li>
    <li><a class="pagination-link is-radiusless" aria-label="Goto page 47">47</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link is-radiusless" aria-label="Goto page 86">86</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'TopHightlights',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Form/Shared
$input-radius: 0;

$sky-blue: #167dff;

.is-current {
  background: $sky-blue;
}
.pagination {
  margin: 15px 0;
}
</style>
