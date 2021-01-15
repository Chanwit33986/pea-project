<template>
  <div>
    <b-nav-item-dropdown right>
      <template #button-content>
        <em>Login</em>
      </template>
      <b-dropdown-form v-on:submit="login">
        <b-form-group
          label="Email"
          label-for="dropdown-form-email"
          @submit.stop.prevent
        >
          <b-form-input
            id="dropdown-form-email"
            size="sm"
            placeholder="email@example.com"
            v-model="inputUsername"
            v-on:keyup="onkeyInput"
          ></b-form-input>
          <span v-if="errorAlertUsername">โปรดกรอก email</span>
        </b-form-group>

        <b-form-group label="Password" label-for="dropdown-form-password">
          <b-form-input
            id="dropdown-form-password"
            type="password"
            size="sm"
            placeholder="Password"
            v-model="inputPassword"
            v-on:keyup="onkeyInput"
          ></b-form-input>
          <span v-if="errorAlertPassword">โปรดกรอก Password</span>
        </b-form-group>

        <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
        <b-button variant="success" size="sm" type="submit" block pill>
          <b-icon icon="box-arrow-in-right" aria-hidden="true"></b-icon> Sign
          In</b-button
        >
        <b-button variant="secondary" size="sm" type="submit" block pill>
          <b-icon icon="google" aria-hidden="true"></b-icon> Sign In with
          Google</b-button
        ><b-button variant="primary" size="sm" type="submit" block pill>
          <b-icon icon="facebook" aria-hidden="true"></b-icon> Sign In with
          Facebook</b-button
        >
      </b-dropdown-form>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>New around here? Sign up</b-dropdown-item-button>
      <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
export default {
  name: "dropdownlogin",
  data() {
    return {
      inputUsername: "",
      inputPassword: "",
      errorAlertUsername: false,
      errorAlertPassword: false
    };
  },
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true);
    },
    login() {
      if (this.inputUsername == "") {
        //this.$swal("error login");
        this.errorAlertUsername = true;
      }
      if (this.inputPassword == "") {
        //this.$swal("error login");
        this.errorAlertPassword = true;
      } else {
        this.$store.dispatch("loginSystem", this.inputUsername);
      }
    },
    onkeyInput() {
      if (this.inputUsername != "") {
        this.errorAlertUsername = false;
      }
      if (this.inputPassword != "") {
        this.errorAlertPassword = false;
      }
    }
  }
};
</script>

<style scoped>
span {
  color: red;
  font-size: 13px;
}
</style>
