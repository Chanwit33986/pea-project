<template>
  <b-breadcrumb>
    <b-breadcrumb-item href="#home" class="breadcrumbItem">
      <b-icon
        icon="house-fill"
        scale="1.25"
        shift-v="1.25"
        aria-hidden="true"
        color="black"
      ></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo" class="breadcrumbItem"
      >Report</b-breadcrumb-item
    >
    <b-breadcrumb-item active>Details</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
export default {
  name: "breadcrumb"
};
</script>

<style>
.breadcrumbItem a {
  color: gray;
}
</style>
