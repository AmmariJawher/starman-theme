<template>
  <div>
    <span class="navbar-item">
      <a class="button is-primary has-text-weight-bold stand-height is-rounded" @click="previewModal = 'is-active'">
        <span>Sign Up</span>
      </a>
    </span>
    <div class="modal" :class="previewModal">
      <div class="modal-background"></div>
      <div class="modal-content has-background-white has-padding">
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" v-bind:class="{'is-danger': errors.has('email')}" type="text"
            placeholder="Email Address" value="" v-model="form.email" name="email" v-validate="'required|email'">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="envelope"/>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-danger" v-show="errors.has('email')">
            {{ errors.first('email') }}
          </p>
        </div>
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Username" value="" v-model="form.username">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="user"/>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" v-bind:class="{'is-danger': errors.has('password')}" type="text"
            placeholder="Password" value="" v-model="form.password" name="password" v-validate="'required|min:8'">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="lock"/>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-danger" v-show="errors.has('password')">
            {{ errors.first('password') }}
          </p>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary is-radiusless is-fullwidth has-text-weight-bold"
            v-bind:disabled="errors.any()">Sign up</button>
          </div>
          <br/>
          <hr>
          <p class="has-text-centred">
            Already have an account? <a class="has-text-weight-bold">Login</a>
          </p>
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
      previewModal: '',
      form: {
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methode: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.has-padding {
  padding: 50px !important;
}
</style>
