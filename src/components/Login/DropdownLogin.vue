<template>
  <div>
    <b-nav-item-dropdown right>
      <template #button-content>
        <em>Login</em>
      </template>
      <b-dropdown-form v-on:submit="login()">
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
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password" label-for="dropdown-form-password">
          <b-form-input
            id="dropdown-form-password"
            type="password"
            size="sm"
            placeholder="Password"
            v-model="inputPassword"
            required
          ></b-form-input>
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
      <b-dropdown-item-button>
        <router-link to="/register"
          >New around here? Sign up</router-link
        ></b-dropdown-item-button
      >
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
      inputPassword: ""
    };
  },
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true);
    },
    login() {
      this.$store.dispatch("loginSystem", this.inputUsername);
    }
  }
};
</script>

<style scoped>
span {
  color: red;
  font-size: 13px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
