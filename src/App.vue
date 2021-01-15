<template>
  <div id="app">
    <navbar />
    <main>
      <b-container>
        <breadcrumb />
        <hr />
        <router-view />
      </b-container>
    </main>
  </div>
</template>

<script>
import Breadcrumb from "./components/Breadcrumb.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar, Breadcrumb },
  name: "App"
};
</script>

<style>
main {
  margin-top: 20px;
}
</style>
