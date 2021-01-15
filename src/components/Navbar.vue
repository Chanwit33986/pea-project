<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navColor">
      <b-navbar-brand>
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
        ReportProblem</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <!-- <b-nav-item href="#" right>Login</b-nav-item> -->
          <dropdown-login v-if="$store.getters.getUsername == ''" />
          <b-nav-item-dropdown right v-else>
            <template #button-content>
              <em> <b-icon icon="person" aria-hidden="true"></b-icon></em>
            </template>
            <b-dropdown-item href="#"><b>Username</b></b-dropdown-item>
            <b-dropdown-item href="#"
              >@ {{ $store.getters.getUsername }}</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import DropdownLogin from "./Login/DropdownLogin.vue";
export default {
  components: { DropdownLogin },
  name: "navbar",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutSystem");
    }
  }
};
</script>

<style scoped>
.navColor {
  background-color: #55297f !important;
}
/* SHIFT */
nav.navColor ul li a {
  position: relative;
  z-index: 1;
}
nav.navColor ul li a:hover {
  color: #552955;
}
nav.navColor ul li a:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 1px;
  content: ".";
  color: transparent;
  background: #7638b1;
  visibility: none;
  opacity: 0;
  z-index: -1;
  border-radius: 12%;
}
nav.navColor ul li a:hover:after {
  opacity: 1;
  visibility: visible;
  height: 100%;
}
</style>
