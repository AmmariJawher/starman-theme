<template>
  <nav class="navbar has-background-white border-bottom">
    <div class="container is-fluid">
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item navbar-search is-paddingless none-border">
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field">
              <label for="switchRoundedDefault">Show map</label>
              <input id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" class="switch is-rounded" checked="checked">
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Settingbar',
  components: {
  },
  data () {}
}

</script>

<style lang="scss" scoped>
.border-bottom {
  border-top: solid #f0f0f0 1px;
  border-bottom: solid #f0f0f0 1px;
}
.top-margine {
  margin-top: 3px;
}
</style>
