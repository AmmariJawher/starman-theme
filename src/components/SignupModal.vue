<template>
  <div>
    <span class="navbar-item">
      <a class="button is-primary stand-height is-radiusless" @click="previewModal = 'is-active'">
        <span>SIGN UP</span>
      </a>
    </span>
    <div class="modal" :class="previewModal">
      <div class="modal-background"></div>
      <div class="modal-content has-background-white has-padding">
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Email Address" value="">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Username" value="">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Password" value="">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary is-radiusless is-fullwidth has-text-weight-bold">Sign up</button>
          </div>
          <br/>
          <hr>
          <p class="has-text-centred">Already have an account? <a class="has-text-weight-bold">Login</a></p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="previewModal = ''"></button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SignupModal',
  data () {
    return {
      previewModal: ''
    }
  },
  methode: {
    toggle (target) {
      return !target
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.has-padding {
  padding: 50px !important;
}
</style>
